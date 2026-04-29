// src/data/react-content.js
import ReactIntroduction from './react/introduction.mdx';
import ReactComponents from './react/components.mdx';
import ReactProps from './react/props.mdx';
import ReactEvents from './react/events.mdx';
import ReactState from './react/state.mdx';
import ReactHooks from './react/hooks.mdx';

export const reactContent = {
  icon: "logos:react",
  title: "React",
  sections: [
    {
      id: "react-introduction",
      title: "Introduction",
      Content: ReactIntroduction
    },
    {
      id: "react-components",
      title: "Components",
      Content: ReactComponents
    },
    {
      id: "react-props",
      title: "Props",
      Content: ReactProps
    },
    {
      id: "react-events",
      title: "Events",
      Content: ReactEvents
    },
    {
      id: "react-state",
      title: "State",
      Content: ReactState
    },
    {
      id: "react-hooks",
      title: "Hooks",
      Content: ReactHooks
    }
  ]
};
