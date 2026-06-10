import { render } from "@testing-library/react";
import Button from "@/components/ui/button";
import { describe, it } from "vitest";

describe("Button", () => {
  it("renders", () => {
    render(
      <Button>
        Test
      </Button>
    );
  });
});
