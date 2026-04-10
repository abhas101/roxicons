import {
  // UI
  Search, Home, Settings, Bell, Trash, Download, Upload, Filter,

  // People / Social
  User, Heart, Star, Users,

  // Media
  Camera, Image, Video, Music,

  // Files
  Folder, File, FileText, Archive,

  // Network
  Globe, Wifi, Cloud,

  // Security
  Lock, Shield, Key,

  // Communication
  Mail, Phone, MessageCircle,

  // Developer
  Code, Database, Terminal, Cpu,

  // Actions
  Plus, Edit, Eye, Play, Pause,

  // Misc
  Map, Calendar, Clock, Tag, Bookmark
} from "lucide-react";

// 🔥 Helper to reduce repetition
const createIcons = (arr, category) =>
  arr.map(([name, component, tags]) => ({
    name,
    category,
    tags,
    component,
  }));

export const icons = [

  // UI
  ...createIcons([
    ["search", Search, ["find", "magnify"]],
    ["home", Home, ["house"]],
    ["settings", Settings, ["gear"]],
    ["bell", Bell, ["notification"]],
    ["trash", Trash, ["delete"]],
    ["download", Download, ["save"]],
    ["upload", Upload, ["send"]],
    ["filter", Filter, ["sort"]],
  ], "ui"),

  // People / Social
  ...createIcons([
    ["user", User, ["profile"]],
    ["users", Users, ["group"]],
    ["heart", Heart, ["like"]],
    ["star", Star, ["favorite"]],
  ], "social"),

  // Media
  ...createIcons([
    ["camera", Camera, ["photo"]],
    ["image", Image, ["picture"]],
    ["video", Video, ["media"]],
    ["music", Music, ["audio"]],
  ], "media"),

  // Files
  ...createIcons([
    ["folder", Folder, ["directory"]],
    ["file", File, ["document"]],
    ["file-text", FileText, ["doc"]],
    ["archive", Archive, ["zip"]],
  ], "files"),

  // Network
  ...createIcons([
    ["globe", Globe, ["internet"]],
    ["wifi", Wifi, ["network"]],
    ["cloud", Cloud, ["server"]],
  ], "network"),

  // Security
  ...createIcons([
    ["lock", Lock, ["secure"]],
    ["shield", Shield, ["protect"]],
    ["key", Key, ["password"]],
  ], "security"),

  // Communication
  ...createIcons([
    ["mail", Mail, ["email"]],
    ["phone", Phone, ["call"]],
    ["message", MessageCircle, ["chat"]],
  ], "communication"),

  // Developer
  ...createIcons([
    ["code", Code, ["programming"]],
    ["database", Database, ["data"]],
    ["terminal", Terminal, ["cli"]],
    ["cpu", Cpu, ["hardware"]],
  ], "developer"),

  // Actions
  ...createIcons([
    ["plus", Plus, ["add"]],
    ["edit", Edit, ["modify"]],
    ["eye", Eye, ["view"]],
    ["play", Play, ["start"]],
    ["pause", Pause, ["stop"]],
  ], "actions"),

  // Misc
  ...createIcons([
    ["map", Map, ["location"]],
    ["calendar", Calendar, ["date"]],
    ["clock", Clock, ["time"]],
    ["tag", Tag, ["label"]],
    ["bookmark", Bookmark, ["save"]],
  ], "misc"),
];