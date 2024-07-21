import aboutConcert from "../../assets/images/concert-about.png";
import featureConcert from "../../assets/images/concert-feature-edited.png";
import importanceConcert from "../../assets/images/concert-importance-guitar.png";
import importanceDynamicsConcert from "../../assets/images/concert-importance-dynamics.jpeg";
import importanceCreativityConcert from "../../assets/images/concert-importance-creativity.jpeg";
import importanceEnvConcert from "../../assets/images/concert-importance-env.jpeg";
import icon from "../../assets/images/Vector1.png";

import aboutWorkshop from "../../assets/images/workshop-about.png";
import featureWorkshop from "../../assets/images/workshop-feature.png";
import importanceWorkshop from "../../assets/images/workshop-importance-mic.png";
import importanceCommsWorkshop from "../../assets/images/workshop-importance-comms.jpeg";
import importanceStressWorkshop from "../../assets/images/concert-importance-creativity.jpeg";
import importanceMoraleWorkshop from "../../assets/images/workshop-importance-morale.jpeg";

const corporateData = {
  concert: {
    name: "concert",
    title: "Live Concert at Work",
    description: "Enhancing Workplace Harmony and Productivity Through Music",
    rightBtn: {
      text: "Musical Workshop",
      url: "/programs/corporate/workshop",
    },
    about:
      "Our program aims to enhance team collaboration, reduce stress, and foster a creative and engaging environment through tailored musical experiences. Whether it's team-building workshops, interactive music sessions, or corporate events, Beyondriffs provides a unique approach to corporate wellness and employee engagement.",
    aboutImage: aboutConcert,
    feature: {
      image: featureConcert,
      items: [
        {
          icon: icon,
          title: "Customized Workshop",
          content:
            "Tailored music workshops to meet the specific needs of your team.",
        },
        {
          icon: icon,
          title: "Team Building Activities",
          content:
            "Engaging activities that promote teamwork and collaboration.",
        },
        {
          icon: icon,
          title: "Expert Instructors",
          content:
            "Professional musicians and instructors leading the sessions.",
        },
      ],
    },
    importance: {
      image: importanceConcert,
      items: [
        {
          image: importanceDynamicsConcert,
          title: "Improved Team Dynamics",
          content:
            "Engaging activities that promote teamwork and collaboration.",
        },
        {
          image: importanceCreativityConcert,
          title: "Enhance Creativity",
          content:
            "Tailored music workshops to meet the specific needs of your team.",
        },
        {
          image: importanceEnvConcert,
          title: "Positive Work Environment",
          content:
            "Professional musicians and instructors leading the sessions.",
        },
      ],
    },
  },
  workshop: {
    name: "workshop",
    title: "Musical Team Bonding Workshop",
    description: "Strengthen Team Dynamics and Foster Unity Through Music",
    rightBtn: {
      text: "Live work concert",
      url: "/programs/corporate/concert",
    },
    about:
      "The Musical Team Bonding Workshop by Beyondriffs is designed to strengthen team dynamics and foster a sense of unity through the power of music. This interactive and engaging workshop offers a unique approach to team building, allowing participants to connect and collaborate in a fun, creative environment.",
    aboutImage: aboutWorkshop,
    feature: {
      image: featureWorkshop,
      items: [
        {
          icon: icon,
          title: "Professional facilitation",
          content:
            "Led by experienced musicians and facilitators who specialize in team-building activities.",
        },
        {
          icon: icon,
          title: "Customizable program",
          content:
            "Tailored workshops to fit the specific needs and goals of your team.",
        },
        {
          icon: icon,
          title: "Interactive Session",
          content:
            "Hands-on sessions where team members can play instruments and create music together.",
        },
      ],
    },
    importance: {
      image: importanceWorkshop,
      items: [
        {
          image: importanceCommsWorkshop,
          title: "Improves communication",
          content:
            "Activities require clear communication and active listening among team members",
        },
        {
          image: importanceStressWorkshop,
          title: "Reduces stress",
          content:
            "Music is a natural stress reliever, promoting a relaxed and positive atmosphere.",
        },
        {
          image: importanceMoraleWorkshop,
          title: "Enhances Morale",
          content:
            "Fun, shared experiences boost team morale and overall job satisfaction.",
        },
      ],
    },
  },
};

export default corporateData;
