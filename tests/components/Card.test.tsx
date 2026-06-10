import { render } from "@testing-library/react";
import Card from "@/components/ui/card";
import { describe, it } from "vitest";

describe("Card", () => {
  it("renders", () => {
    render(
      <Card>
        Test
      </Card>
    );
  });
});
