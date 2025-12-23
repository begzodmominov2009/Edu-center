import { LogOut } from "lucide-react";
import React from "react";

function UserProfile() {
    return (
        <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">ED</span>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 truncate">Admin</p>
                    <p className="text-xs text-gray-500">admin@educenter.uz</p>
                </div>
            </div>
            <button className="w-full mt-2 flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                <LogOut className="w-5 h-5" />
                <span className="text-sm">Chiqish</span>
            </button>
        </div>
    );
}

export default UserProfile;
