import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";

import './Publication.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { publicationData } from '../../data/publicationData'
import SinglePublication from './SinglePublication/SinglePublication';


function Publication() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {publicationData.length > 0 && (
                <div className="publication" id="publication" style={{backgroundColor: theme.secondary}}>
                    <div className="publication--header">
                        <h1 style={{color: theme.primary}}>Publication</h1>
                    </div>
                    <div className="publication--body">
                        <div className="publication--bodyContainer">
                            {publicationData.slice(0, 3).reverse().map(publication => (
                                <SinglePublication 
                                    theme={theme}
                                    title={publication.title}
                                    desc={publication.description}
                                    date={publication.date}
                                    image={publication.image}
                                    url={publication.url}
                                    key={publication.id}
                                    id={publication.id}
                                />
                            ))}
                        </div> 

                        {publicationData.length > 3 && (
                            <div className="publication--viewAll">
                                <Link to="/publication">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Publication
