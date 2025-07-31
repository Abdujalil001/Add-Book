import { useState } from 'react'
import './App.css'
import { Button, Modal } from 'antd'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import img7 from './assets/7.png'
import imgMain from './assets/image.png'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [books, setBooks] = useState([
    {
      title: 'Tafsiri Hilol',
      author: 'Shayx Muhammad Sodiq Muhammad Yusuf',
      img: imgMain,
      desc: 'Roman XIX asr voqealarini o‘z ichiga olgan...',
    },
    {
      title: 'Ulamolar Nazdida Vaqtning Qadri',
      author: 'Abdulfattoh Abu G‘udda',
      img: img2,
      desc: 'Roman XIX asr voqealarini o‘z ichiga olgan...',
    },
    {
      title: 'Ikki Eshik Orasi',
      author: 'Abdulla Qodiriy',
      img: img3,
      desc: 'Roman XIX asr voqealarini o‘z ichiga olgan...',
    },
    {
      title: 'O‘tkan Kunlar',
      author: 'Abdulla Qodiriy',
      img: img4,
      desc: 'Roman XIX asr voqealarini o‘z ichiga olgan...',
    },
    {
      title: 'Oltin Silsila',
      author: 'Shayx Muhammad Sodiq Muhammad Yusuf',
      img: img5,
      desc: 'Roman XIX asr voqealarini o‘z ichiga olgan...',
    },
    {
      title: 'Yangi Kitob',
      author: 'Yangi Muallif',
      img: img6,
      desc: 'Yangi kitob uchun qisqacha tavsif.',
    },
    {
      title: 'Boshqa Kitob',
      author: 'Boshqa Muallif',
      img: img7,
      desc: 'Boshqa kitob uchun qisqacha tavsif.',
    },
  ])

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    img: '',
    desc: '',
  })

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setBooks([...books, newBook])
    setIsModalOpen(false)
    setNewBook({ title: '', author: '', img: '', desc: '' })
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="app-container">
      <h1 className="header-title">MY Books</h1>
      <Button type="primary" className="add-book-btn" onClick={showModal}>
        Add Book
      </Button>

      <Modal
        title="Add New Book"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={{ 'aria-label': 'Close modal' }}
      >
        <input
          type="text"
          placeholder="Kitob nomi"
          className="modal-input"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Muallif"
          className="modal-input"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rasm URL"
          className="modal-input"
          value={newBook.img}
          onChange={(e) => setNewBook({ ...newBook, img: e.target.value })}
        />
        <textarea
          placeholder="Tavsif"
          className="modal-input"
          value={newBook.desc}
          onChange={(e) => setNewBook({ ...newBook, desc: e.target.value })}
        />
      </Modal>

      <div className="books-list">
        {books.map((book, idx) => (
          <div key={idx} className="book-card">
            <img src={book.img} alt={book.title} className="book-img" />
            <div>
              <div className="book-info-title">{book.title}</div>
              <div className="book-info-author">{book.author}</div>
              <div className="book-info-desc">{book.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
