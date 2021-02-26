import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    toolbar:{
        height:56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    
    lbox: {
        display: 'flex',
        alignItems: 'center',
    },
    ltext: {
        paddingLeft: 10,
        color: '#757575',
        textDecoration: 'none',
    },
    rbox: {
        display: 'flex',
        alignItems: 'center',
        color: '#757575',
        float: 'right',
        paddingRight: 15,
    },
    perfil: {
        cursor: 'pointer',
        paddingRight: 20,
        height: 40,
    },
    rtext: {
        color: '#757575',
        textDecoration: 'none',
    }

}));


function TopBar(){
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.lbox}>
                    <a className={classes.ltext} href="#">
                        <h2>MyPlace</h2>
                    </a>
                    <a href="#" className={classes.ltext}>
                        <h3>Chat</h3>
                    </a>
                    <a href="#" className={classes.ltext}>
                        <h3>Locais</h3>
                    </a>
                    <a href="#" className={classes.ltext}>
                        <h3>Eventos</h3>
                    </a>
                    <a href="#" className={classes.ltext}>
                        <h3>Carteira</h3>
                    </a>
                </Box>

                <Box className={classes.rbox}>
                    <img className={classes.perfil}  src="/perfil.png" />
                    <a href="#" className={classes.rtext}>
                        <h3>Perfil</h3>
                    </a>
                </Box> 
            </Toolbar>
        </AppBar>
    )
};

export default TopBar;