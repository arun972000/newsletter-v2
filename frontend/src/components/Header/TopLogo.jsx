import "./TopLogo.css"

const TopLogo = () => {
  return (
    <>
    <div className="logo-banner">
    <div className="container">
        <div className="col-sm-12">
            <div className="row" style={{display:"flex",justifyContent:"space-between"}}>
                <div className="left">
                    <a href="https://raceautoindia.com">
                        <img src="https://raceautoindia.com/uploads/logo/logo_64bb9e0420e272-08079366-93886693.svg" alt="logo" className="logo" width="190" height="60" />
                    </a>
                </div>
                <div className="right">
                    <div className="pull-right">
                        <section className="col-sm-12 col-xs-12 bn-lg ">
                            <div className="row">
                                <a href=""><img src="http://raceautoindia.com/uploads/blocks/block_651e6225b207d6-95198635-83337385.gif" alt="" /></a>                    </div>
                        </section>


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default TopLogo