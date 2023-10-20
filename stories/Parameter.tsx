import React from 'react';
import { Card, CardContent, CardFooter, CardTitle } from '../components/ui/card';


const parameterData = [
  // {
  //   title: 'query, path, body, or header',
  //   value: 'string',
  //   description: 'Whether it is a query, path, body, or header parameter followed by the name',
  // },
  {
    title: 'type',
    value: 'string',
    description: 'Expected type of the parameter’s value',
  },
  {
    title: 'required',
    value: 'boolean',
    description: 'Indicate whether the parameter is required',
  },
  {
    title: 'initialValue',
    value: 'any',
    description: 'Value that will be used to initialize the playground',
  },
  {
    title: 'placeholder',
    value: 'string',
    description: 'Placeholder text for the input in the playground',
  },
  {
    title: 'children',
    value: 'string',
    description: 'Description of the parameter (markdown enabled)',
  },
];

const Parameter = () => (
  <div>
    <Card>
      <CardTitle className="p-5">Props</CardTitle>
      <CardContent className="flex justify-between items-center">
        <h3 className='content'>query, path, body, or header</h3>
        <h3>string</h3>
      </CardContent>
      <CardFooter>Whether it is a query, path, body, or header parameter followed by the name</CardFooter>
    </Card>
    {parameterData.map((parameter, index) => (
      <Card key={index}>
        <CardContent className="flex justify-between items-center p-6">
          <h3 className='content'>{parameter.title}</h3>
          <h3>{parameter.value}</h3>
        </CardContent>
        <CardFooter>{parameter.description}</CardFooter>
      </Card>
    ))}
  </div>
);

export default Parameter;

