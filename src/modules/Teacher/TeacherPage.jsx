import React, { useContext, useState } from 'react';
import { Space, Table, Tag, Avatar, message, Popconfirm } from 'antd';
import { UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Eye, Pen, Plus, Trash2 } from 'lucide-react';
import useGet from '../../hooks/useGet';
import axios from 'axios';
import { toast } from 'react-toastify';
import { LanguageContext } from '../../context/Language';

const TeacherPage = () => {
  const [addModal, setAddModal] = useState(false)
  const { data: teachers, getData } = useGet("Teachers")
  const [messageApi, holder] = message.useMessage();
  const { lang, setLang, t } = useContext(LanguageContext)

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    createdAt: '',
    age: '',
    avatar: '',
    profession: '',
    rating: '',
    Experience: '',
    ganer: '',
    phone: '',
    email: '',
    telegram: '',
    linkedin: ''
  });

  // Input o'zgarishlarini handle qilish
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://69208abe31e684d7bfcd6e40.mockapi.io/Teachers', formData);
      toast.success("O'qituvchi qo'shildi!");
      getData(); // Ro'yxatni yangilash
      setAddModal(false); // Modalni yopish

      // Formni tozalash
      setFormData({
        firstName: '',
        lastName: '',
        createdAt: '',
        age: '',
        avatar: '',
        profession: '',
        rating: '',
        Experience: '',
        ganer: '',
        phone: '',
        email: '',
        telegram: '',
        linkedin: ''
      });
    } catch (err) {
      console.log(err);
      toast.error("Xatolik yuz berdi!");
    }
  };

  const deleteTeacher = async (id) => {
    try {
      await axios.delete(`https://69208abe31e684d7bfcd6e40.mockapi.io/Teachers/${id}`)
      toast.success("o'chirildi")
      getData()
    } catch (err) {
      console.log(err);
      toast.error("xatolik yuz berdi")
    }
  }

  const cancel = (e) => {
    console.log(e);
    messageApi.error('Bekor qilindi');
  };

  const columns = [
    {
      title: `${t.avatar}`,
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar, record) => (
        <Avatar src={avatar} icon={<UserOutlined />} size={40}>
          {record.firstName?.[0]}{record.lastName?.[0]}
        </Avatar>
      ),
    },
    {
      title: `${t.full_name}`,
      key: 'fullName',
      render: (_, record) => (
        <a>{record.firstName} {record.lastName}</a>
      ),
    },
    {
      title: `${t.age}`,
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: `${t.gender}`,
      dataIndex: 'ganer',
      key: 'ganer',
      render: (gender) => (
        <Tag color={gender === 'Female' ? 'pink' : 'blue'}>
          {gender}
        </Tag>
      ),
    },
    {
      title: `${t.profession}`,
      dataIndex: 'profession',
      key: 'profession',
      render: (profession) => (
        <Tag color="purple">{profession}</Tag>
      ),
    },
    {
      title: `${ t.rating }`,
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => (
        <Tag color="gold">⭐ {rating}</Tag>
      ),
    },
    {
      title: `${ t.experience }`,
      dataIndex: 'Experience',
      key: 'Experience',
      render: (exp) => <span>{exp} years</span>,
    },
    {
      title: `${ t.contact }`,
      key: 'contact',
      render: (_, record) => (
        <Space direction="vertical" size="small">
          <div><PhoneOutlined /> {record.phone}</div>
        </Space>
      ),
    },
    {
      title: `${ t.action }`,
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Eye className='w-4 h-4 hover:text-blue-600 cursor-pointer' />
          <Pen className='w-4 h-4 hover:text-green-600 cursor-pointer' />
          <Popconfirm
            title={t.delete_task}
            description={t.delete_task_desc}
            onConfirm={() => deleteTeacher(record.id)}
            onCancel={cancel}
            okText={t.yes}
            cancelText={t.no}
          >
            <Trash2 className='w-4 h-4 hover:text-red-600 cursor-pointer' />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <button
        onClick={() => setAddModal(true)}
        className='bg-blue-600 rounded-lg text-[white] font-medium px-2 py-1 cursor-pointer flex items-center gap-[2px] mb-4'
      >
        <Plus className='w-4 h-4' /> {t.add_teacher}
      </button>

      {holder}
      <Table columns={columns} dataSource={teachers} rowKey="id" />

      {addModal && (
        <div
          onClick={() => setAddModal(false)}
          className="fixed flex items-center justify-center top-0 left-0 bg-[whitesmoke]/50 px-[20px] w-full h-full z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[white] max-w-[700px] w-full p-[10px] sm:p-[20px] rounded-lg"
          >
            <div>
              <h1 className="text-center font-bold mb-2 text-[20px]">{t.add_teacher}</h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] outline-none w-full py-2 px-2"
                  type="text"
                  placeholder={t.first_name}
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] outline-none w-full py-3 px-2"
                  type="text"
                  placeholder={t.last_name}
                />
              </div>

              <div className="flex items-center gap-4">
                <input
                  name="createdAt"
                  value={formData.createdAt}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] cursor-pointer outline-none w-full py-3 px-2"
                  type="date"
                />
                <input
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] cursor-pointer outline-none w-full py-3 px-2"
                  type="number"
                  placeholder={t.age}
                />
                <input
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] cursor-pointer outline-none w-full py-3 px-2"
                  type="text"
                  placeholder={t.avatar_url}
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <select
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] cursor-pointer py-3 px-2 outline-none"
                >
                  <option value="">{t.select_profession}</option>
                  <option value="History">{t.history}</option>
                  <option value="Geography">{t.geography}</option>
                  <option value="Mathematics">{t.mathematics}</option>
                  <option value="Computer Science">{t.computer_science}</option>
                  <option value="Biology">{t.biology}</option>
                  <option value="Physical Education">{t.physical_educatio}</option>
                  <option value="Music">{t.music}</option>
                  <option value="Physics">{t.physics}</option>
                  <option value="English Literature">{t.english_literature}</option>
                  <option value="Art">{t.art}</option>
                  <option value="Chemistry">{t.chemistry}</option>
                </select>

                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] cursor-pointer py-3 px-2 outline-none"
                >
                  <option value="">{t.select_rating}</option>
                  <option value="4.5+">4.5+ {t.select_rating_start}</option>
                  <option value="4.0+">4.0+ {t.select_rating_start}</option>
                  <option value="3.5+">3.5+ {t.select_rating_start}</option>
                </select>

                <select
                  name="Experience"
                  value={formData.Experience}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] cursor-pointer py-3 px-2 outline-none"
                >
                  <option value="">{t.select_experience}</option>
                  <option value="0-5">0-5 {t.select_experience_years}</option>
                  <option value="6-10">6-10 {t.select_experience_years}</option>
                  <option value="11-20">11-20 {t.select_experience_years}</option>
                </select>

                <select
                  name="ganer"
                  value={formData.ganer}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] cursor-pointer py-3 px-2 outline-none"
                >
                  <option value="">{t.select_gender}</option>
                  <option value="Male">{t.select_gender_male}</option>
                  <option value="Female">{t.select_gender_female}</option>
                </select>
              </div>

              <div className="flex items-center gap-4">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] outline-none w-full py-3 px-2"
                  type="tel"
                  placeholder={t.phone}
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] outline-none w-full py-3 px-2"
                  type="email"
                  placeholder={t.email}
                />
              </div>

              <div className="flex items-center gap-4">
                <input
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] outline-none w-full py-3 px-2"
                  type="text"
                  placeholder={t.telegram_user_name}
                />
                <input
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  required
                  className="border-b-[1px] outline-none w-full py-3 px-2"
                  type="text"
                  placeholder={t.linkedin_user_name}
                />
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setAddModal(false)}
                  className="px-6 py-3 text-gray-700 hover:bg-red-600 hover:text-[white] duration-200 text-[16px] font-bold bg-gray-200 rounded-lg cursor-pointer"
                >
                  {t.canel_teacher_button}
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 text-[16px] font-bold bg-gray-300 text-gray-700 hover:text-[white] duration-200 hover:bg-blue-600 rounded-lg cursor-pointer"
                >
                  {t.add_teacher_button}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default TeacherPage