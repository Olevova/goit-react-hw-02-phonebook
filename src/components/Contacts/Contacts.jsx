import PropTypes from "prop-types";
import { ContactElem } from "components/ContactElem/ContactElem";


export const Contact = ({ props, delCont }) => {
        return props.map(({id, name, number}) =>
            <ContactElem key={id}
                id={id}
                name={name}
                number={number}
                delCont={delCont}            
            />
            )}
            
Contact.propTypes = {
    props: PropTypes.array.isRequired,
    delCont:PropTypes.func.isRequired
}


