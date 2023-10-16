"use client";
import Accordion from "@/components/ui/Accordion/Accordion";

import Card from "@/components/ui/Card/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tab/tabs";
import { Button } from "@/components/ui/Button/button";
import { ChevronRight, AlertTriangle } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/Alert/alert"


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-[90%]">
        <Card title="My Card" href="https://linkedin.com">
          Content goes here
        </Card>

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
            You can put any content in here. Check out AccordionGroup if you
            want to group multiple Accordions into a single display.
          </p>
        </Accordion>

        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="first-tab">First Tab</TabsTrigger>
            <TabsTrigger value="sec-tab">Second Tab</TabsTrigger>
          </TabsList>
          <TabsContent value="first-tab">
            ☝️ Welcome to the content that you can only see inside the first
            Tab.
          </TabsContent>
          <TabsContent value="sec-tab">
            ✌️ Here' content that's only inside the second Tab.
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <Button>
          <ChevronRight className="mr-2 h-4 w-4" /> Login
        </Button>
      </div>

      <div>
      <Alert>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
      If using a folder to store your api pages, you cannot use api for the name of the folder unless it is nested inside another folder. Folder names such as api-reference are accepted.
      </AlertDescription>
    </Alert>
      </div>
    </main>
  );
}
