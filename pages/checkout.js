import Head from "next/head";

const Checkout = () => {

    return (
        <>
        <Head>
            <title>Checkout</title>
        </Head>
        <div className="container checkout-wrapper">
            <div className="row">
                <div className="col-8 checkout__cart">
                    Shopping Bag
                </div>
                <div className="col-4 checkout__form">
                    form
                </div>
            </div>
    
        </div>
       </>
    );
};

export default Checkout;