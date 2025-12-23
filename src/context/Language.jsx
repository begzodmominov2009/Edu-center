import React, { createContext, useEffect, useState } from 'react'

export const LanguageContext = createContext()

const ChangeLanguageContext = ({ children }) => {

    const [lang, setLang] = useState(() => {
        const savedLang = localStorage.getItem("lang")
        return savedLang ? savedLang : "uz"
    })

    useEffect(() => {
        localStorage.setItem("lang", lang)
    }, [lang])

    const translations = {
        uz: {
            admin_panel: "Administrator paneli",
            dashboard_overview: "Boshqaruv paneli sharhi",
            welcome_to_your_school_management_dashboard: "Maktabni boshqarish paneliga xush kelibsiz",
            total_teachers: "Jami o‘qituvchilar",
            total_students: "Jami o‘quvchilar",
            avg_teachers_rating: "O‘qituvchilarning o‘rtacha reytingi",
            avg_students_rating: "O‘quvchilarning o‘rtacha reytingi",
            recent_activity: "So‘nggi faollik",
            new_teacher_added: "Yangi o‘qituvchi qo‘shildi",
            hours_ago: "soat oldin",
            student_ratings_updated: "O‘quvchi baholari yangilandi",
            new_students_enrolled: "Yangi o‘quvchilar ro‘yxatdan o‘tdi",
            day_ago: "kun oldin",
            quick_actions: "Tezkor amallar",
            home: "Bosh sahifa",
            teachers: "O‘qituvchilar",
            students: "O‘quvchilar",
            manage_teachers: "O‘qituvchilarni boshqarish",
            view_and_manage_all_teachers: "Barcha o‘qituvchilarni ko‘rish va boshqarish",
            manage_students: "O‘quvchilarni boshqarish",
            view_and_manage_all_students: "Barcha o‘quvchilarni ko‘rish va boshqarish",
            // addTeacherModal
            first_name: "Ism",
            last_name: "Familya",
            age: "Yosh",
            avatar_url: "Rasim urli",
            phone: "Telefon",
            email: "Elektron pochta",
            telegram_user_name: "Telegram (@Foydalanuvchi nomi)",
            linkedin_user_name: "Linkedin (@Foydalanuvchi nomi)",
            add_teacher_button: "Qo'shish",
            canel_teacher_button: "Bekor qilish",
            select_profession: "Kasbni tanlang",
            select_rating: "Reytingni tanlang",
            select_rating_start: "yulduz",
            select_experience: "Tajribani tanlang",
            select_experience_years: "yil",
            select_gender: "Jinsini tanlang",
            select_gender_male: "Erkak",
            select_gender_female: "Ayol",
            history: "Tarix",
            geography: "Geografiya",
            mathematics: "Matematika",
            computer_science: "Informatika",
            biology: "Biologiya",
            physical_educatio: "Jismoniy tarbiya",
            music: "Musiqa",
            physics: "Fizika",
            english_literature: "Ingliz adabiyoti",
            art: "Tasviriy san’at",
            chemistry: "Kimyo",
            add_teacher: "O'qituvchi qo'shish",
            // TeacherTable
            avatar: "Rasim",
            full_name: "Isim familya",
            age: "Yosh",
            gender: "Jinsi",
            profession: "Kasbi",
            rating: "Daraja",
            experience: "Tajriba",
            contact: "Aloqa",
            action: "Amallar",
            // deleteModal
            delete_task: "Vazifani o'chirish",
            delete_task_desc: "Bu ma'lumotni o'chirib tashlamoqchi ekanligingizga ishonchingiz komilmi?",
            yes: "Ha",
            no: "Yo'q",
        },
        en: {
            admin_panel: "Admin Panel",
            dashboard_overview: "Dashboard Overview",
            welcome_to_your_school_management_dashboard: "Welcome to your school management dashboard",
            total_teachers: "Total Teachers",
            total_students: "Total Students",
            avg_teachers_rating: "Average Teacher Rating",
            avg_students_rating: "Average Student Rating",
            recent_activity: "Recent Activity",
            new_teacher_added: "New teacher added",
            hours_ago: "hours ago",
            student_ratings_updated: "Student ratings updated",
            new_students_enrolled: "New students enrolled",
            day_ago: "day ago",
            quick_actions: "Quick Actions",
            home: "Home",
            teachers: "Teachers",
            students: "Students",
            manage_teachers: "Manage Teachers",
            view_and_manage_all_teachers: "View and manage all teachers",
            manage_students: "Manage Students",
            view_and_manage_all_students: "View and manage all students",
            // addTeacherModal
            first_name: "First name",
            last_name: "Last name",
            age: "Age",
            avatar_url: "Image URL",
            phone: "Phone",
            email: "Email",
            telegram_user_name: "Telegram (@Username)",
            linkedin_user_name: "Linkedin (@Username)",
            add_teacher_button: "Add",
            canel_teacher_button: "Cancel",
            select_profession: "Select profession",
            select_rating: "Select rating",
            select_rating_start: "star",
            select_experience: "Select experience",
            select_experience_years: "year",
            select_gender: "Select gender",
            select_gender_male: "Male",
            select_gender_female: "Female",
            history: "History",
            geography: "Geography",
            mathematics: "Mathematics",
            computer_science: "Computer Science",
            biology: "Biology",
            physical_educatio: "Physical Education",
            music: "Music",
            physics: "Physics",
            english_literature: "English Literature",
            art: "Art",
            chemistry: "Chemistry",
            add_teacher: "Add Teacher",
            // TeacherTable
            avatar: "Avatar",
            full_name: "Full name",
            age: "Age",
            gender: "Gender",
            profession: "Profession",
            rating: "Rating",
            experience: "Experience",
            contact: "Contact",
            action: "Actions",
            // deleteModal
            delete_task: "Delete task",
            delete_task_desc: "Are you sure you want to delete this data?",
            yes: "Yes",
            no: "No",

        }
    }

    const t = translations[lang]

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    )

}


export default ChangeLanguageContext
