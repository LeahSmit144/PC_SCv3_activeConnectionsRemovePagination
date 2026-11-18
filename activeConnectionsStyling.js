// ==UserScript==
// @name          New script phoenixcontact.cloud
// @namespace     Violentmonkey Scripts
// @icon          data:image/x-icon;base64,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
// @version       1.0.0
//
// @match         https://secure.phoenixcontact.cloud/activeconnections.php*
// @grant         none
//
// @author        https://github.com/LeahSmit144
// @description   restyle active connections page to remove pagination in favor of a scrollable list with search bar functionality.
// ==/UserScript==

(function() {

  //------------------------------------------------------------------------------------------------------
  // Main (main parameters, main function calls)
  //------------------------------------------------------------------------------------------------------

  const machinePageList = document.getElementsByClassName("machine_page");
  if(machinePageList.length !== 2) {
      alert("kan lijst met projecten niet vinden in pagina.");
  }
  const machinePage = machinePageList[1];

  // default container. hide this.
  const phoenixContainer = machinePage.children[0];
  phoenixContainer.style = "display: none;"

  const customProjectsContainer = document.createElement("div");
  createSearchBar();
  createCustomList();


  //------------------------------------------------------------------------------------------------------
  // search bar
  //------------------------------------------------------------------------------------------------------

  function createSearchBar() {
    const searchBarContainer = document.createElement("div");
    searchBarContainer.style = "display: flex; margin: 0 30px 15px 30px;"

    const searchLabel = document.createElement("label");
    searchLabel.style = "margin: auto 5px auto 1px; font-size: initial;";
    searchLabel.innerText = "Zoek op projectnaam of -nummer: "

    const searchBar = document.createElement("input");
    searchBar.style = "min-width: 350px; padding: 4px 12px; font-size: initial;"
    searchBar.oninput = function() {
      const searchInput = searchBar.value;

      const projectNodes = new Array(...customProjectsContainer.childNodes);
      for(const projectNode of projectNodes) {
        const infoNode = projectNode.firstElementChild;
        const nameNode = infoNode.querySelector("#machine_id");
        const name = nameNode.textContent;

        projectNode.style = name.toLowerCase().includes(searchInput.toLowerCase()) ? "display: block;" : "display: none;"
      }
    }

    searchBarContainer.appendChild(searchLabel);
    searchBarContainer.appendChild(searchBar);
    machinePage.appendChild(searchBarContainer);
  }


  //------------------------------------------------------------------------------------------------------
  // non paginated page
  //------------------------------------------------------------------------------------------------------

  function createCustomList() {
    // default paginator. hide this.
    const paginator = document.getElementById("js_paginator");
    paginator.style = "display: none;"
    // fix styling a little.
    document.getElementById("indexwrapper").style = "margin-bottom: 10px;"

    // create new container and a list to track items present.
    let customProjectIds = [];
    customProjectsContainer.id = "test";
    customProjectsContainer.className = phoenixContainer.className;
    machinePage.appendChild(customProjectsContainer);

    // update custom projects list on mutation observer
    function phoenixContainerChangeCallback() {
      const projects = phoenixContainer.children;

      const newCustomProjectIds = [];
      for (const project of projects) {
        const itemId = project.firstElementChild.id;
        newCustomProjectIds.push(itemId);

        if(customProjectIds.find(existingId => existingId === itemId) !== undefined) {
          continue;
        }

        const projectClone = project.cloneNode(true);
        projectClone.className = "machine_box active_machine_box box_online";
        projectClone.style = "display: block;";

        const projectStartButton = project.querySelector(".connectMachineStart");
        const projectCloneStartButton = projectClone.querySelector(".connectMachineStart");
         projectCloneStartButton.onclick = function() {
           projectStartButton.click();
         };

        customProjectsContainer.appendChild(projectClone);
      }

      for(const customProjectId of customProjectIds) {
        if(newCustomProjectIds.find(currentId => currentId === customProjectId) !== undefined) {
          continue;
        }

        const customProjectNodes = new Array(...customProjectsContainer.childNodes);
        const customProjectNode = customProjectNodes.find(customProjectNode => customProjectNode.firstElementChild.id === customProjectId);
        customProjectsContainer.removeChild(customProjectNode);
      }

      customProjectIds = newCustomProjectIds;
    }

    const observer = new MutationObserver(phoenixContainerChangeCallback);
    observer.observe(phoenixContainer, {subtree: true, childList: true, attributes: true});
  }
})();


