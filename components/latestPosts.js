import Image from 'next/image';

export default function LastestPosts() {
  return (
    <section className="latest__posts container">
      <h2>Latest posts</h2>
      <div className="row">
        <div className="card col-12 col-md-4">
          <Image src='https://source.unsplash.com/0O6Fv3Ff_XI' width='400' height='500' />
          <div className="card-body">
            <h5 className="card-title">Best Outfits Of The Month</h5>
            <p className="card-text">Donec id velit ac orci hendrerit commodo. Lorem ipsum, dolor sit amet consectetur...</p>
            <a href="#" className="button--outline">Read More</a>
          </div>
        </div>
        <div className="card col-12 col-md-4">
          <Image src='https://source.unsplash.com/Ci_fZ5cL9Jo' width='400' height='500' />
          <div className="card-body">
            <h5 className="card-title">Best Outfit For Men</h5>
            <p className="card-text">Mauris tincidunt purus urna, eu ullamcorper turpis dapibus eget...</p>
            <a href="#" className="button--outline">Read More</a>
          </div>
        </div>
        <div className="card col-12 col-md-4">
          <Image src='https://source.unsplash.com/0AAiQq6rhlw' width='400' height='500' />
          <div className="card-body">
            <h5 className="card-title">Latest Spring Trends</h5>
            <p className="card-text">Morbi vitae ullamcorper elit, a congue justo. Nullam pulvinar sollicitudin...</p>
            <a href="#" className="button--outline">Read More</a>
          </div>
        </div>
      </div>
    </section >
  )
}