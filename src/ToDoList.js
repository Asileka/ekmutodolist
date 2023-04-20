import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
function ToDoList({ listArray }) {
  function listItem() {
    return (
      <div>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={listArray.length === 0 ? null : listArray[0].newTask}
            />
          </ListItemButton>
        </ListItem>
      </div>
    );
  }

  return (
    <div>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List>
          {listArray.map((task) => (
            <div>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={listArray.length === 0 ? null : task.newTask}
                  />
                </ListItemButton>
              </ListItem>
            </div>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default ToDoList;
