"use client";
import Accordion from "@/components/ui/Accordion/Accordion";

import Card from "@/components/ui/Card/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tab/tabs";
import { Button } from "@/components/ui/Button/button";
import { ChevronRight, AlertTriangle } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/Alert/alert";
import Code from "@/components/ui/Code/code";
import Parameter from "@/components/ui/Parameter/Parameter";

export default function Home() {
  const codeSnippets = [
    {
      id: "1",
      title: "cURL",
      language: "bash",
      value: `curl --request GET
        --url https://mintlify.com/docs/api/demo
        --header 'Authorization: Bearer <token>'`,
    },
    {
      id: "2",
      title: "Python",
      language: "python",
      value: `import requests

      url = "https://mintlify.com/docs/api/demo"
      
      headers = {"Authorization": "Bearer <token>"}
      
      response = requests.request("GET", url, headers=headers)
      
      print(response.text)`,
    },
  ];

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
        <div className="my-20">

        <Tabs defaultValue="first-tab" className="w-full">
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
        

        <Code items={codeSnippets} />

      </div>

      <div className="m-20">
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            If using a folder to store your api pages, you cannot use api for
            the name of the folder unless it is nested inside another folder.
            Folder names such as api-reference are accepted.
          </AlertDescription>
        </Alert>
      </div>

      

      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Parameter />
      </div>
    </main>
  );
}
