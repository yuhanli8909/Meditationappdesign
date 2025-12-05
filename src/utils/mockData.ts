import { Home, BarChart2, Search, User, Music } from "lucide-react";

export const NAV_ITEMS = [
  { id: "home", icon: Home, label: "Home" },
  { id: "stats", icon: BarChart2, label: "Stats" },
  { id: "explore", icon: Search, label: "Explore" },
  { id: "sounds", icon: Music, label: "Sounds" },
  { id: "profile", icon: User, label: "Profile" },
];

export const WEEKLY_STATS = [
  { day: "Sun", minutes: 15 },
  { day: "Mon", minutes: 30 },
  { day: "Tue", minutes: 45 },
  { day: "Wed", minutes: 20 },
  { day: "Thu", minutes: 60 },
  { day: "Fri", minutes: 40 },
  { day: "Sat", minutes: 25 },
];

export const ACTIVITY_TYPES = [
  { name: "Meditation", value: 61, fill: "#A78BFA" }, // Violet
  { name: "Breathwork", value: 24, fill: "#FDE047" }, // Yellow
  { name: "Yoga", value: 15, fill: "#34D399" },      // Emerald
];

export const NEW_RELEASES = [
  {
    id: 1,
    title: "Relieve Stress",
    author: "Sarah Conner",
    image: "https://images.unsplash.com/photo-1763136524650-376409b665a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY2FsbSUyMHBlYWNlJTIwZGFya3xlbnwxfHx8fDE3NjQwODEyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "15 min",
    category: "Meditation"
  },
  {
    id: 2,
    title: "Morning Flow",
    author: "Mike Ross",
    image: "https://images.unsplash.com/photo-1632182591734-633b89f42d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcG9zZSUyMHNpbGhvdWV0dGUlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQwODEyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "20 min",
    category: "Yoga"
  },
  {
    id: 3,
    title: "Deep Sleep",
    author: "Jenny Doe",
    image: "https://images.unsplash.com/photo-1759914514194-b5883244e683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwY2FsbSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY0MDgxMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "30 min",
    category: "Sleep"
  }
];

export const EXPLORE_CATEGORIES = [
  {
    id: "morning",
    title: "Morning Meditations",
    gradient: "from-violet-500 to-fuchsia-500",
    image: "https://images.unsplash.com/photo-1763136524650-376409b665a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY2FsbSUyMHBlYWNlJTIwZGFya3xlbnwxfHx8fDE3NjQwODEyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "evening",
    title: "Evening Meditations",
    gradient: "from-emerald-400 to-cyan-500",
    image: "https://images.unsplash.com/photo-1759914514194-b5883244e683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwY2FsbSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY0MDgxMjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "journeys",
    title: "Journeys",
    gradient: "from-orange-400 to-rose-500",
    image: "https://images.unsplash.com/photo-1632182591734-633b89f42d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcG9zZSUyMHNpbGhvdWV0dGUlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQwODEyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];
