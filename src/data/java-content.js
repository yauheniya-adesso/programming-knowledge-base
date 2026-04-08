import introduction from './java/introduction.html?raw';
import basicStructure from './java/basic-structure.html?raw';
import methods from './java/methods.html?raw';
import methodOverloading from './java/method-overloading.html?raw';
import classes from './java/classes.html?raw';
import constructors from './java/constructors.html?raw';
import encapsulation from './java/encapsulation.html?raw';
import inheritance from './java/inheritance.html?raw';
import polymorphism from './java/polymorphism.html?raw';
import abstractClasses from './java/abstract-classes.html?raw';
import interfaces from './java/interfaces.html?raw';

export const javaContent = {
  icon: "ri:java-fill",
  title: "Java",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: introduction
    },
    {
      id: "basic-structure",
      title: "Basic Structure",
      content: basicStructure
    },
    {
      id: "methods",
      title: "Methods",
      content: methods
    },
    {
      id: "method-overloading",
      title: "Method Overloading",
      content: methodOverloading
    },
    {
      id: "classes",
      title: "Classes",
      content: classes
    },
    {
      id: "constructors",
      title: "Constructors",
      content: constructors
    },
    {
      id: "encapsulation",
      title: "Encapsulation",
      content: encapsulation
    },
    {
      id: "inheritance",
      title: "Inheritance",
      content: inheritance
    },
    {
      id: "polymorphism",
      title: "Polymorphism",
      content: polymorphism
    },
    {
      id: "abstract-classes",
      title: "Abstract Classes",
      content: abstractClasses
    },
    {
      id: "interfaces",
      title: "Interfaces",
      content: interfaces
    }
  ]
};