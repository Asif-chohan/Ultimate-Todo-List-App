import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { styles } from './style';
import './style.css';
import SideBar from '../SideBar';
import Manu from '../todoList/manu';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'


class Todoview extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('Store data is : ', this.props.data)
    }


    handleChangeexpand = id => (event, expanded) => {
        console.log(event.target)
        if (event.target.classList.contains("some")) {

            return null
        } else {

            this.setState({
                expanded: expanded ? id
                    : false
            })
        }
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        const todos = this.props.data;
        return (
            <Fragment>
                {/* Desktop Design Image */}
                <Hidden only={['sm', 'xs']}>
                    <div className={classes.root}>
                        <Grid container>
                            <Grid item sm={3}>
                                <SideBar />
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} >
                                <Grid item xs={12} sm={12} md={12} >
                                    <div className="addHead-bg">
                                        <Typography variant="display3" gutterBottom className="title">My Day</Typography>
                                    </div>
                                </Grid>

                                {/* <div className="todo-task-view">
                                    <span className="task-done"></span>
                                    <span className="todotext"> Meeting With Doctor </span>
                                    <img src={threedots} className="threedots" />
                                </div> */}


                                <Grid item xs={12}>

                                    <ExpansionPanel expanded={expanded === 1}
                                        onChange={this.handleChangeexpand(1)}
                                        className={classes.todoItem}>
                                        <ExpansionPanelSummary className={classes.expansionSummary}>

                                            <Grid container className={classes.todoPanel}>
                                                <Grid item md={1} className={classes.checkboxGrid}>
                                                    <div class="round">
                                                        <input type="checkbox" id="checkbox" />
                                                        <label for="checkbox"></label>
                                                    </div>

                                                </Grid>
                                                <Grid item md={10} align="left">

                                                    <Typography className={classes.description}>Expansion Panel</Typography>

                                                </Grid>
                                                {/* className={classes.manus} */}
                                                <Grid className="some" item md={1} >
                                                    <div className="some">
                                                        <Manu className="some" />
                                                    </div>
                                                </Grid>
                                            </Grid>

                                        </ExpansionPanelSummary>
                                        <Divider />
                                        <ExpansionPanelDetails>
                                            <Grid container>
                                                <Grid item xs={12}>

                                                    <Typography variant="caption" className={classes.description}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                        sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={10} md={11}>

                                                    <Typography variant="caption" align="right">
                                                        June 20, 2020
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>

                                </Grid>


                            </Grid>
                        </Grid>
                    </div>
                </Hidden>
            </Fragment>
        );
    }

}

Todoview.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(data) {
    return {
        data: data.TodoApp.todoList
    }
}


export default connect(mapStateToProps, null)(withStyles(styles)(Todoview));