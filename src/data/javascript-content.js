// src/data/javascript-content.js
import displayDialog from './javascript/display-dialog.html?raw';
import variables from './javascript/variables.html?raw';
import dataTypes from './javascript/data-types.html?raw';
import functions from './javascript/functions.html?raw';
import objects from './javascript/objects.html?raw';
import prototypes from './javascript/prototypes.html?raw';
import arrays from './javascript/arrays.html?raw';
import arrayMethods from './javascript/array-methods.html?raw';
import domApi from './javascript/dom-api.html?raw';
import events from './javascript/events.html?raw';
import windowObject from './javascript/window-object.html?raw';
import restApis from './javascript/rest-apis.html?raw';
import domNodes from './javascript/dom-nodes.html?raw';

export const javascriptContent = {
  icon: "simple-icons:javascript",
  title: "JavaScript",
  sections: [
    {
      id: "display-dialog",
      title: "Display Dialog",
      content: displayDialog
    },
    {
      id: "variables",
      title: "Variables",
      content: variables
    },
    {
      id: "data-types",
      title: "Data Types",
      content: dataTypes
    },
    {
      id: "functions",
      title: "Functions",
      content: functions
    },
    {
      id: "objects",
      title: "Objects",
      content: objects
    },
    {
      id: "prototypes",
      title: "Prototypes",
      content: prototypes
    },
    {
      id: "arrays",
      title: "Arrays",
      content: arrays
    },
    {
      id: "array-methods",
      title: "Array Methods",
      content: arrayMethods
    },
    {
      id: "dom-api",
      title: "DOM API",
      content: domApi
    },
    {
      id: "events",
      title: "Events",
      content: events
    },
    {
      id: "window-object",
      title: "Window Object",
      content: windowObject
    },
    {
      id: "rest-apis",
      title: "REST APIs",
      content: restApis
    },
    {
      id: "dom-nodes",
      title: "DOM Node Types",
      content: domNodes
    }
  ]
};