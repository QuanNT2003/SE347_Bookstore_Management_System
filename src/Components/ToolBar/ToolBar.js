import React from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaListUl } from 'react-icons/fa6'
import { FaCirclePlus } from 'react-icons/fa6'
import Button from 'react-bootstrap/Button';
ToolBar.propTypes = {
    array: PropTypes.array.isRequired
};

function ToolBar({ array }) {
    const [arraybtn, Setarraybtn] = useState([])

    useEffect(() => {
        Setarraybtn(array)
        console.log(arraybtn)
    })
    return (
        <div >
            <Container fluid>
                <Row className='w-100'>
                    <Col>
                        {
                            arraybtn.map(btn => (
                                <NavLink to={btn.link} key={btn.id} className="text-decoration-none text-white btn text-start bg-primary pe-4 me-4 mb-2" >
                                    {
                                        btn.type === 1 ? (
                                            <FaListUl className='me-2' />
                                        ) : (
                                            <FaCirclePlus className='me-2' />
                                        )
                                    }
                                    {btn.title}
                                </NavLink>





                            ))
                        }
                    </Col>

                </Row>

            </Container>

        </div>
    );
}

export default ToolBar;