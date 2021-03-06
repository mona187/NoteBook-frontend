import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NotesTab from "./NotesTab";
import { AddButtonStyled } from "../styles";
import notebookStore from "../stores/notebookStore";
import { observer } from "mobx-react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={10}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "auto",
  },
  tabs: {
    borderRight: `1.5px solid ${theme.palette.divider}`,
  },
}));

const NotebooksTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  //map to Tab components (title) and TabPanel components (content)
  const notebooksListTabs = notebookStore.notebooks.map((notebook) => (
    <Tab label={notebook.name} {...a11yProps(notebook.id)} />
  ));

  const notebooksListTabPanels = notebookStore.notebooks.map((notebook) => (
    <TabPanel value={value} index={notebook.id}>
      <NotesTab notebook={notebook} />
    </TabPanel>
  ));

  const handleChange = (event, newValue) => {
    setValue(newValue); //new value = selected index
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        style={{ marginRight: -80 }}
        TabIndicatorProps={{ style: { background: "#54E454" } }}
      >
        {/* <Tab label="Notebook 1" {...a11yProps(0)} />
        <Tab label="Notebook 2" {...a11yProps(1)} />
        <Tab label="Notebook 3" {...a11yProps(2)} />
        <Tab label="Notebook 4" {...a11yProps(3)} />
        <Tab label="Notebook 5" {...a11yProps(4)} />
        <Tab label="Notebook 6" {...a11yProps(5)} />
        <Tab label="Notebook 7" {...a11yProps(6)} /> */}
        {notebooksListTabs}
        <AddButtonStyled> + add notebook</AddButtonStyled>
      </Tabs>
      {notebooksListTabPanels}
      {/* <TabPanel value={value} index={0}>
        <NotesTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NotesTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NotesTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NotesTab />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <NotesTab />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <NotesTab />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <NotesTab />
      </TabPanel> */}
    </div>
  );
};

export default observer(NotebooksTab);
