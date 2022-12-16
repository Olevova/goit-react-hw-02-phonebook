import PropTypes from "prop-types";
import style from "./Contact.module.scss"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const Contact = ({ props, delCont }) => {
        return props.map(({id, name, number}) =>
            <ul className={style.ulElem} key={id}>
                        <li className={style.liElem} >
                            <p>Name : {name}</p>
                    <p>Telephone Number : {number}</p>
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" style={{ color:"#f0ffff", borderColor:"#f0ffff" }} onClick={()=>delCont(id)}>
                        Delete 
                    </Button>
                    </Stack>        
                </li>
                    </ul>
            )}
            
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}
