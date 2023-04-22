import React from 'react'
import Layout from '../../components/Layout/Layout'
import "./roomDetail.css"

export default function RoomDetail() {
  return (
   <section>
    <Layout>
         <br />
    <div className='section__55'>
        <div className='columns__55'>
            <div className='room_img'>
                <img src="https://sc01.alicdn.com/kf/Hb67dd8ca5e154e839fb4b1fa168aec78V/230959564/Hb67dd8ca5e154e839fb4b1fa168aec78V.jpg" alt="" width={800} />
            </div>
            <div className='column__45'>
               <h1>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit. <br /> Odio, fugiat!</h1>
               <p>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit. Libero <br /> eos minima voluptates hic quas <br /> dolores? Et nam laboriosam ab consequatur <br /> delectus, libero veritatis nostrum <br /> explicabo amet fuga vel nemo illo. Nostrum <br /> molestias inventore culpa mollitia.</p>
               <h1 className='text__76'>$ 150.999</h1>
               <h1 className='text__80'>Name: Mona Liza</h1>
               <button className='button__77'>BUY</button>
               

            </div>
        </div>
    </div>
    </Layout>
   </section>
  )
}
