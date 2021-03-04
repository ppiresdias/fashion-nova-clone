import React from 'react'

const Affiliate = () => {
    return (
        <main className="container affiliate">
            <section className="affiliate__offer row col-md-12">
                <div className="affiliate__offerImage col-md-6">
                    <div className="affiliate__offerText row">
                        <h3>Earn</h3>
                        <h2><span>20%</span>Commissions</h2>
                    </div>
                </div>
                <div className="affiliate__heading col-md-6">
                    <h1>Earning is as simple as sharing a link.</h1>
                </div>

            </section>
            <section className="affiliate__description">
                <h1>Simply the best way.</h1>
                <div className="row col-md-12">
                <h2 className="affiliate__descriptionSub1 col col-md-4">No inventory to manage.
                    <p className="col">This is definitely the best option if you really want to make some amazing money.</p>
                </h2>
                <h2 className="affiliate__descriptionSub2 col col-md-4">No sales to make, ever.
                    <p className="col">This is definitely the best option if you really want to make some amazing money.</p></h2>
                <h2 className="affiliate__descriptionSub3 col col-md-4">Share a link, we do the rest.
                    <p className="col">This is definitely the best option if you really want to make some amazing money.</p></h2>
                </div>
              
            
            </section>
            <section className="affiliate__choices ">
                
            </section>
            
        </main>
    )
}

export default Affiliate
