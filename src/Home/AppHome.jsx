

const AppHome = ({user}) => {
    const {name,username ,email}= user
    return (
        <div className="container">
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
     <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{username}</p>
    <p>{email}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppHome;