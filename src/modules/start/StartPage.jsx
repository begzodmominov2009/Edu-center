import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../../context/Language'
import useGet from '../../hooks/useGet'

const StartPage = () => {
    const { data:teachers} = useGet("Teachers")
    const {data:students} = useGet("Students")
    console.log(teachers);
    
    const { lang, setLang, t } = useContext(LanguageContext)
    return (
        <>
            <div>
                <div>
                    <h2 className="text-gray-900 text-[18px] sm:text-[20px] font-bold dark:text-white mb-2">{t.dashboard_overview}
                    </h2>
                    <p className="text-gray-600 dark:text-white">{t.welcome_to_your_school_management_dashboard}</p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pr-[0px] md:pr-[20px] mt-[20px] md:mt-[40px] gap-3">
                    <div
                        className="flex items-center justify-between gap-[18px] group hover:shadow-lg py-5  p-6 bg-[white] dark:bg-gray-800 border-[1px] border-gray-200 dark:border-gray-600 cursor-pointer  w-full  rounded-lg">
                        <div>
                            <h1 className="text-gray-600 dark:text-white">{t.total_teachers}</h1>
                            <h1 className="text-gray-600 dark:text-white"><span id="total-teachers">{teachers.length}</span></h1>
                        </div>
                        <div className="bg-[whitesmoke] p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-users h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-between gap-[18px] dark:bg-gray-800 group hover:shadow-lg py-5  p-6 bg-[white] border-[1px] border-gray-200 dark:border-gray-600 cursor-pointer  w-full  rounded-lg">
                        <div>
                            <h1 className="text-gray-600 dark:text-white">{t.total_students}</h1>
                            <h1 className="text-gray-600 dark:text-white"><span id="total-students">{students.length}</span></h1>
                        </div>
                        <div className="bg-[whitesmoke] p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-graduation-cap h-6 w-6 text-purple-600 dark:text-purple-400"
                                aria-hidden="true">
                                <path
                                    d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z">
                                </path>
                                <path d="M22 10v6"></path>
                                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="flex items-center duration-200 dark:bg-gray-800 justify-between gap-[18px] group hover:shadow-lg py-5  p-6 bg-[white] border-[1px] border-gray-200 dark:border-gray-600 cursor-pointer  w-full  rounded-lg">
                        <div className=''>
                            <h1 className="text-gray-600 dark:text-white">{t.avg_teachers_rating}</h1>
                            <p className="text-gray-600 dark:text-white"><span id="avg-teacher">0</span></p>
                        </div>
                        <div className="bg-[whitesmoke] p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-star h-6 w-6 text-yellow-600 dark:text-yellow-400" aria-hidden="true">
                                <path
                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="flex items-center dark:bg-gray-800 justify-between gap-[18px] group hover:shadow-lg py-5  p-6 bg-[white] border-[1px] border-gray-200 dark:border-gray-600 cursor-pointer  w-full  rounded-lg">
                        <div>
                            <h1 className="text-gray-600 dark:text-white">{t.avg_students_rating}</h1>
                            <h1 className="text-gray-900 dark:text-white"><span id="avg-student">0</span></h1>
                        </div>
                        <div className="bg-[whitesmoke] p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-trending-up h-6 w-6 text-green-600 dark:text-green-400"
                                aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="mt-[15px] md:mt-[30px] pr-[0px] md:pr-[20px] grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div
                        className="w-full bg-white dark:bg-gray-800 border-1 rounded-lg border-gray-200 dark:border-gray-600 py-6 px-5">
                        <h4 className="leading-none text-gray-900 dark:text-white">{t.quick_actions}</h4>
                        <div className="flex flex-col gap-3 mt-[30px]">
                            <Link to={"/teachers"}
                                className="flex items-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white group hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl gap-3">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="lucide lucide-users h-5 w-5" aria-hidden="true">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <div className="dark:text-white">{t.manage_teachers}</div>
                                    <div className="text-sm text-blue-100">{t.view_and_manage_all_teachers}</div>
                                </div>
                            </Link>
                            <Link to={"/students"}
                                className="flex items-center p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white group hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl gap-3">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="lucide lucide-graduation-cap h-5 w-5"
                                        aria-hidden="true">
                                        <path
                                            d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z">
                                        </path>
                                        <path d="M22 10v6"></path>
                                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                    </svg>
                                </div>
                                <div>
                                    <div>{t.manage_students}</div>
                                    <div className="text-sm text-blue-100">{t.view_and_manage_all_students}</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="w-full bg-white dark:bg-gray-800 border-1 rounded-lg border-gray-200 dark:border-gray-600 py-6 px-5">
                        <h4 data-slot="card-title" className="leading-none text-gray-900 dark:text-white">{t.recent_activity}</h4>
                        <div className="flex flex-col gap-3 mt-[30px]">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 mt-2 rounded-lg"></div>
                                <div>
                                    <p className="text-gray-900 dark:text-white">{t.new_teacher_added}</p>
                                    <p className="text-sm text-gray-600 dark:text-white"><span>2</span> {t.hours_ago}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 mt-2 rounded-lg"></div>
                                <div>
                                    <p className="text-gray-900 dark:text-white">{t.student_ratings_updated}</p>
                                    <p className="text-gray-600 dark:text-white text-sm"><span>5</span> {t.hours_ago}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-purple-500 mt-2 rounded-lg"></div>
                                <div>
                                    <p className="text-gray-900 dark:text-white">{t.new_students_enrolled}</p>
                                    <p className="text-sm text-gray-600 dark:text-white"><span>1</span> {t.day_ago}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartPage
