import React, { useState } from "react";
import {
    Menu,
    X,
    Search,
    Bell,
    Mail,
    Settings,
    User,
    PanelLeftClose,
    PanelRightClose,
} from "lucide-react";
import useSidebarStore from "../../store/useSidebarStore";
import { Link } from "react-router-dom";

export default function Header() {
    function singout() {
        localStorage.removeItem("auth")
    }
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const { isCollapsed, toggleSidebar } = useSidebarStore();
    const notifications = [
        {
            id: 1,
            text: "Yangi buyurtma #6678 qo'shildi",
            time: "5 daqiqa oldin",
            unread: true,
        },
        {
            id: 2,
            text: "Mutaxassis profili yangilandi",
            time: "15 daqiqa oldin",
            unread: true,
        },
        {
            id: 3,
            text: "Tizimda 27 ta onlayn foydalanuvchi",
            time: "1 soat oldin",
            unread: false,
        },
    ];

    return (
        <header
            className={`
        fixed top-0 z-30 w-full bg-white border-b border-gray-200 
        backdrop-blur-sm bg-white/95
        transition-all duration-300
        ${isCollapsed ? "pl-20" : "pl-64"}
      `}
        >
            <div className="flex items-center justify-between px-6 py-[18px]">
                <button
                    onClick={toggleSidebar}
                    className="p-2 hover:bg-gray-100 outline-none cursor-pointer rounded-lg transition-colors"
                >
                    {isCollapsed ? (
                        <PanelRightClose className="w-6 h-6" />
                    ) : (
                        <PanelLeftClose className="w-6 h-6" />
                    )}
                </button>
                <div className="flex items-center gap-2">
                    {/* Messages */}
                    <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                    </button>

                    {/* Notifications */}
                    <div className="relative">
                        <button
                            onClick={() => setShowNotifications(!showNotifications)}
                            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <Bell className="w-5 h-5 text-gray-600" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        {showNotifications && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setShowNotifications(false)}
                                />
                                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-20">
                                    <div className="p-4 border-b border-gray-200">
                                        <h3 className="text-gray-900">Bildirishnomalar</h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Sizda 2 ta yangi bildirishnoma bor
                                        </p>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto">
                                        {notifications.map((notif) => (
                                            <div
                                                key={notif.id}
                                                className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${notif.unread ? "bg-blue-50" : ""
                                                    }`}
                                            >
                                                <p className="text-sm text-gray-900">{notif.text}</p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {notif.time}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-3 border-t border-gray-200">
                                        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700">
                                            Barchasini ko'rish
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Settings */}
                    <select className="w-full outline-none cursor-pointer  rounded-lg px-1  py-1">
                        <option value="uz">UZ</option>
                        <option value="en">EN</option>
                    </select>

                    {/* Divider */}
                    <div className="w-px h-6 bg-gray-200 mx-2 hidden sm:block"></div>

                    {/* Profile */}
                    <div className="relative">
                        <button
                            onClick={() => setShowProfile(!showProfile)}
                            className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">AD</span>
                            </div>
                            <div className="hidden lg:block text-left">
                                <p className="text-sm text-gray-900">Admin</p>
                                <p className="text-xs text-gray-500">Administrator</p>
                            </div>
                        </button>

                        {showProfile && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setShowProfile(false)}
                                />
                                <div className="absolute  right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-20">
                                    <div className="p-3">
                                        <div className="flex items-center gap-3 p-2">
                                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-sm">AD</span>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-900">Admin</p>
                                                <p className="text-xs text-gray-500">
                                                    admin@educenter.uz
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 p-2">
                                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                                            <User className="w-4 h-4" />
                                            Profil
                                        </button>
                                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                                            <Settings className="w-4 h-4" />
                                            Sozlamalar
                                        </button>
                                    </div>
                                    <div className="border-t border-gray-200 p-2">
                                        <Link to={"/"} onClick={singout} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                                            Chiqish
                                        </Link>
                                    </div>

                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
