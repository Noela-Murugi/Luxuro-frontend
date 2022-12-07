import NavBar from "../nav/NavBar";
import '../Landing.css'
import { Link } from "react-router-dom";
import { Button } from "../styles";

function Stations(){
    return(
        // <Wrapper>
        <>
        <NavBar/>
        <div className='Jobs'>
        <div className='jobs-container'>
            <div className="wera-container">
                <div className="wera">
                    <div>
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/142929487.jpg?k=0279ec440bb7ac3d77719dcfa65ccdc8de8fdb37c45e11008dfda29844eab223&o=&hp=1" alt="job" />
                        <h3>Station A</h3>
                        <p>Price: <span>Kshs. 120000</span></p>
                        <Button className='btnpp' as={Link} to="/details">More Details</Button>
                    </div>
                </div>
                <div className="wera">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFDG804-yEO2zVghmprBmxmE2GRe-R_3pAQ&usqp=CAU" alt="job" />
                        <h3>Station B</h3>
                        <p>Price: <span>Kshs. 100000</span></p>
                        <Button className='btnpp' as={Link} to="/details">More Details</Button>
                    </div>
                </div>
                <div className="wera">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zYIQCblnO7OaWEnovRbWdJ8q_5Wta1-yHw&usqp=CAU" alt="job" />
                        <h3>Station C</h3>
                        <p>Price: <span>Kshs. 150000</span></p>
                        <Button className='btnpp'as={Link} to="/details">More Details</Button>
                    </div>
                </div>
                <div className="wera">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHCpURy34hOBvuoIjTxkCN443fBsOExecIWw&usqp=CAU" alt="job" />
                        <h3>Station D</h3>
                        <p>Price: <span>Kshs. 170000</span></p>
                        <Button className='btnpp'as={Link} to="/details">More Details</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )

}

export default Stations;
