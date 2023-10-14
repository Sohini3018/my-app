"use client";
import Accordion from "@/components/ui/Accordion/Accordion";
import AccordionGroup from "@/components/ui/Accordion/AccordionGroup";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

import Card from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Card title="My Card" href="https://example.com">
        Content goes here
      </Card>
      <div className="w-full">
      <Accordion
        title="I am an Accordion"
        defaultOpen={false} // Optional, determines if the accordion is initially open
        onChange={(isOpen) =>
          console.log(`Accordion is ${isOpen ? "open" : "closed"}`)
        } // Optional callback on accordion state change
        variant="rounded" // Optional, choose between 'rounded' or 'minimalist'
      >
        {/* Content of the accordion goes here */}
        <p>
          You can put any content in here. Check out AccordionGroup if you want
          to group multiple Accordions into a single display.
        </p>
      </Accordion>
      </div>
    </main>
  );
}
