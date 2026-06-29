import neo4j, { Driver } from "neo4j-driver";

let driver: Driver | null = null;

export function getDriver() {
  if (driver) {
    return driver;
  }

  const uri = process.env.NEO4J_URI;
  const username = process.env.NEO4J_USERNAME;
  const password = process.env.NEO4J_PASSWORD;

  if (!uri || !username || !password) {
    return null;
  }

  driver = neo4j.driver(
    uri,
    neo4j.auth.basic(username, password),
    {
      disableLosslessIntegers: true,
    }
  );

  return driver;
}
