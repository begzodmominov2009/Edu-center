// data/menuItems.js
import { icon } from "leaflet";
import {
    GraduationCap,
    Home,
    Users,
} from "lucide-react";


const menuItems = [
    { id: "/main", label: "Bosh sahifa", icon: Home },
    { id: "/teachers", label: "O'qituvchilar", icon: Users },
    { id: "/students", label: "O'quvchilar", icon: GraduationCap }

];

export default menuItems;
