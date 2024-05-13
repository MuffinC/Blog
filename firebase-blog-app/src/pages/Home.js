import React,{useState, useEffect} from 'react'
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from "../firebase"
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) =>{
        let list =[];
        snapshot.docs.forEach((docs)=>{
          list.push({id: docs.id, ...docs.data()})
        });
        setBlogs(list);
      }, (error) =>{
        console.log(error)
      }
    );
    return () =>{
      unsub();
    }
  },[]);

console.log("blogs", blogs);
//2:10:13
  return (
    <div className='container-fluid pb-4 pt-4 padding'>
      <div className='container padding'>
        <div  className='row mx-0'>
          <h2>Trending</h2>
          <div className='col-md-8'>
            <h2>Blog section</h2>
          </div>
          <div className='col-md-3'>
            <h2>Tags</h2>
            <h2>Most Popular</h2>
            
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home