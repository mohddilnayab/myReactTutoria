import { Radius } from 'lucide-react';
import './App.css';
import Card from './components/cards';


function App() {

  const jobOpenings =  [
  {
    id: 1,
    company: 'Amazon',
    logo: 'https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg',
    daysAgo: '5 days ago',
    title: 'Senior UI/UX Designer',
    types: ['Part-Time', 'Senior Level'],
    rate: '$120/hr',
    location: 'Mumbai, India'
  },
  {
    id: 2,
    company: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    daysAgo: '2 days ago',
    title: 'Frontend Engineer',
    types: ['Full-Time', 'Mid Level'],
    rate: '$110/hr',
    location: 'Bengaluru, India'
  },
  {
    id: 3,
    company: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    daysAgo: '1 day ago',
    title: 'Product Designer',
    types: ['Contract', 'Senior Level'],
    rate: '$140/hr',
    location: 'Hyderabad, India'
  },
  {
    id: 4,
    company: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_N_logo.svg',
    daysAgo: '7 days ago',
    title: 'UI Engineer',
    types: ['Part-Time', 'Junior Level'],
    rate: '$85/hr',
    location: 'Pune, India'
  },
  {
    id: 5,
    company: 'Airbnb',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg',
    daysAgo: '3 days ago',
    title: 'UX Researcher',
    types: ['Full-Time', 'Mid Level'],
    rate: '$105/hr',
    location: 'Delhi, India'
  }
];

console.log(jobOpenings)
  return (
    <div className="app">
   {jobOpenings.map(function (elem, idx){
    return <div key={idx} style={{'border-radius': '30px'}}>
      <Card company={elem.company} logo={elem.logo} daysAgo={elem.daysAgo} title={elem.title} types={elem.types} pay={elem.rate} location={elem.location}/>
    </div>
   })}
    </div>
  )
}

export default App
