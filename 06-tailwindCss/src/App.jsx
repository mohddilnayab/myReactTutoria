

import './App.css'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

function App() {

const personals = [
  {
    id: 1,
    color: 'red',
    image: 'https://media.istockphoto.com/id/1330112480/photo/man-working-on-laptop-at-cafe.webp?a=1&b=1&s=612x612&w=0&k=20&c=xSizq85FZYHylzgA6SfR4kOgxovUd3zSbcx44-cehDE=',
    tag: 'Satisfied',
    intro: 'Happy customer who uses mainstream banking services and rarely needs additional support.'
  },
  {
    id: 2,
    color: 'red',
    image: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
    tag: 'Underserved',
    intro: 'Has basic access but lacks tailored financial products and reliable local support.'
  },
  {
    id: 3,
    color: 'red',
    image: 'https://media.istockphoto.com/id/1036079864/photo/confidence-leads-to-success.jpg?s=2048x2048&w=is&k=20&c=M4YgNNg6aQZqWK4Gnxqu9qB7wKbvcFvOJvIlqh2iuuo=',
    tag: 'Underbanked',
    intro: 'Relies mostly on cash or informal channels and has limited access to formal banking services.'
  },
  {
    id: 4,
    color: 'red',
    image: 'https://media.istockphoto.com/id/2215183906/photo/businessman-typing-and-laptop-in-office-with-night-overtime-and-writer-at-publishing-agency.webp?a=1&b=1&s=612x612&w=0&k=20&c=l_vpWvYXfCuCnrexRLHmJ2cYwUD2Osj3esi9Xxx4cEk=',
    tag: 'Entrepreneur',
    intro: 'Small business owner looking for payment solutions and small loans to grow their venture.'
  },
  {
    id: 5,
    color: 'red',
    image: 'https://media.istockphoto.com/id/2218785741/photo/professional-woman-working-at-computer-in-modern-office-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TDlZwKuGkkr_bfzGfjW-Gg9NSYj8ChdFLCfF_KQvwZo=',
    tag: 'Tech Savvy',
    intro: 'Comfortable with mobile-first financial products and frequently adopts new fintech apps.'
  },
  {
    id: 6,
    color: 'red',
    image: 'https://media.istockphoto.com/id/1354898601/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=qhlY6BZ9CowHjWb5Fk7WNO8AI8Br6CEzL-bbtHeS8po=',
    tag: 'Unbanked',
    intro: 'Has no formal bank account and depends on cash or informal community services for transactions.'
  }
];
  return (

    
    <div>
      <Section1 users={personals}/>
      <Section2/>
    </div>
  )
}

export default App
