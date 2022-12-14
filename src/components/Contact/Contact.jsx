

export const Contact = ({props}) => {
    return (
        <>
            {props.map(({ id, name, number }) =>
              <div key={id}>
                    <p>{name}</p>
                    <p>{ number}</p>
                </div>
            )
        }

        </>
    )

}