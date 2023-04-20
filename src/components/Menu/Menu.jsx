import React from 'react'
import "./menu.css"

export default function Menu() {
  return (
    <section className='menu__section'>
        <div className='section-1'>
            <h1> MENU </h1>
            <p>Unique wood fired pizzas or be tempted by our pasta, antipasto, focaccias, salads and Bruschetta dishes. Relax <br /> in the friendly ambience as you enjoy the aromas of the wood ovens or sit al fresco and soak up the Mildura <br /> sunshine.</p>
        <div className='columns-1'>
            <div className='column-1'>
                <div className='card-1'>
                    <div className='card-image-1'>
                        <img src="https://kartinkin.net/uploads/posts/2021-04/1617249568_35-p-pitstsa-na-belom-fone-krasivo-45.jpg" alt="" width={250}/>
                    </div>
                    <div className='card-content-1'>
                        <div className='media-1'>
                            <div className='media-content-1'>
                                <h1>ORIGINAL</h1>
                                <p>Tomato sauce, mozzarella & oregano</p>
                                <p>$18.00</p>
                                <button className='button-1'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='column-1'>
                <div className='card-1'>
                    <div className='card-image-1'>
                        <img src="https://kartinkin.net/uploads/posts/2021-04/1617249568_35-p-pitstsa-na-belom-fone-krasivo-45.jpg" alt="" width={250}/>
                    </div>
                    <div className='card-content-1'>
                        <div className='media-1'>
                            <div className='media-content-1'>
                                <h1>SALAMI</h1>
                                <p>Tomato sauce, mozzarella & mild salami</p>
                                <p>$15.00</p>
                                <button className='button-1'>ADD TO CART</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='column-1'>
                <div className='card-1'>
                    <div className='card-image-1'>
                        <img src="https://kartinkin.net/uploads/posts/2021-04/1617249568_35-p-pitstsa-na-belom-fone-krasivo-45.jpg" alt="" width={250}/>
                    </div>
                    <div className='card-content-1'>
                        <div className='media-1'>
                            <div className='media-content-1'>
                                <h1>CHICKEN</h1>
                                <p>Tomato sauce, mozzare  pineapp sauce</p>
                                <p>$25.00</p>
                                <button className='button-1'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='column-1'>
                <div className='card-1'>
                    <div className='card-image-1'>
                        <img src="https://kartinkin.net/uploads/posts/2021-04/1617249568_35-p-pitstsa-na-belom-fone-krasivo-45.jpg" alt="" width={250}/>
                    </div>
                    <div className='card-content-1'>
                        <div className='media-1'>
                            <div className='media-content-1'>
                                <h1>HAWAIIAN</h1>
                                
                                <p>Tomato sauce, mozzarella, ham & pianpp</p>
                                
                                <p>$16.00</p>
                                
                                <button className='button-1'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
   
    
  )
}
