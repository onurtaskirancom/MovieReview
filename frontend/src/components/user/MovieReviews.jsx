import React from "react";
import Container from "../Container";
import CustomButtonLink from "../CustomButtonLink";

export default function MovieReviews() {
  return (
    <div className="dark:bg-primary bg-white min-h-screen pb-10">
      <Container className="xl:px-0 px-2 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold dark:text-white text-secondary">
            <span className="text-light-subtle dark:text-dark-subtle font-normal">
              Reviews for:
            </span>{" "}
            This is the title
          </h1>

          <CustomButtonLink label="View All" />
        </div>
      </Container>
    </div>
  );
}
