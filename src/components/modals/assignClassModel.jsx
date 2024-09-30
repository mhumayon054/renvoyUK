import React, { useEffect, useState } from "react";
import { Button, Modal, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
import { ApiRequests } from "../../service/ApiRequests";
import {
  assignCollectionToOrgAsyncThunk,
  unassignCollectionToOrgAsyncThunk,
} from "../../redux/pagesSlices/collectionSlice";
import Pagination from "react-bootstrap/Pagination";
import { Box, Tab, Tabs } from "@mui/material";

export default function AssignClassModel() {
  const state = useSelector(
    (state) => state.model?.modelState?.AssignClassModel
  );
  const modelArgs = useSelector(
    (state) => state.model?.modelArgs?.AssignClassModel?.args
  );
  const d = useDispatch();
  const [value, setValue] = React.useState(0);
  const [searchValue, setSearchValue] = useState(null);
  const [organizations, setOrganizations] = useState({
    limit: 10,
    results: [],
    // organizations: [],
    start: 0,
    page: 0,
    total: 16,
  });

  const [assignedIds, setAssignedIds] = useState([]);

  // const getOrganizations = async (params) => {
  //   const response = await ApiRequests.getOrganizations({
  //     limit: organizations.limit,
  //     ...params,
  //   });
  //   setOrganizations(response?.data);
  //   return response?.data;
  // };

  const getOrganizations = async (params) => {
    const response = await ApiRequests.getOrganizations({
      limit: organizations.limit,
      ...(!!searchValue ? { name: searchValue } : {}), // Include search parameter
      ...params,
    });
    setOrganizations(response?.data);
    return response?.data;
  };

  const getAssignIds = async () => {
    const response = await ApiRequests?.assignIdsCollectionToOrg({
      collection_id: modelArgs?.id,
    });
    setAssignedIds(response?.data);
    return response?.data;
  };

  useEffect(() => {
    if (state) {
      getOrganizations({ page: 1 });
      getAssignIds();
    }
  }, [searchValue, state]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // close model
  // const closeModel = () =>
  //   d(handleModel({ model: "AssignModel", state: false }));

  const closeModel = () => {
    d(handleModel({ model: "AssignClassModel", state: false }));
    setSelectedOrganizations([]);
  };

  const [selectedOrganizations, setSelectedOrganizations] = useState([]);

  // ... (other code)

  // Function to handle organization selection
  const handleOrganizationSelect = (organization) => {
    setSelectedOrganizations((prevSelectedOrganizations) => {
      const isSelected = prevSelectedOrganizations.some(
        (selectedOrganization) => selectedOrganization?.organization_id === organization?.organization_id
      );
      if (isSelected) {
        // If organization is already selected, remove from selected organizations
        return prevSelectedOrganizations.filter(
          (selectedOrganization) => selectedOrganization?.organization_id !== organization?.organization_id
        );
      } else {
        // If organization is not selected, add to selected organizations
        return [...prevSelectedOrganizations, organization];
      }
    });
  };

  // Function to handle the "assign" action for selected organizations
  const handleAssignSelectedOrganizations = () => {
    // selectedOrganizations.forEach((organization) => {
    const orgIds =
      selectedOrganizations &&
      selectedOrganizations?.map((organization) => organization?.tenantId);
    if (value === 0) {
      d(
        assignCollectionToOrgAsyncThunk({
          data: { orgIds, collection_id: modelArgs?.id },
          callBack: () => {
            getAssignIds();
          },
        })
      );
    } else {
      d(
        unassignCollectionToOrgAsyncThunk({
          data: { orgIds, collection_id: modelArgs?.id },
          callBack: () => {
            getAssignIds();
          },
        })
      );
    }
    setSelectedOrganizations([]);
  };
  let active = organizations?.page;

  let items = [];
  for (
    let number = 1;
    number <= Math.ceil(organizations?.totalPages);
    number++
  ) {
    items.push(
      <Pagination.Item
        onClick={() => getOrganizations({ page: --number +1 })}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setSelectedOrganizations([]);
  }, [value]);

  return (
    <Modal
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={state}
      onHide={closeModel}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Share Course" {...a11yProps(0)} />
          <Tab label="Remove Access" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Modal.Body className="invite-model">
        <div className="confirmation-popup">
          <h3 style={{ marginBottom: "15px", fontWeight: "600" }}>
            Share with organization(s)
          </h3>
          <div className="searchDiv">
            <input
              type="text"
              className="searchStyle"
              placeholder="Search organizations..."
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          <div className="row">
            {organizations?.results?.length > 0 ? (
              organizations?.results?.map((organization, index) => {

                const activeOrg = assignedIds.some(
                  (item) => {
                    return item.space_id === organization.tenantId
                  }
                );
                return (
                  <div className="col-lg-4">
                    <>
                      <div
                        className={`cole-book-list-card2 ${
                          activeOrg && "active-org"
                        }`}
                        key={index}
                        onClick={() =>
                          (value === 0 ? !activeOrg : activeOrg) &&
                          handleOrganizationSelect(organization)
                        }
                      >
                        <div
                          style={{ marginRight: "25px" }}
                          className="book-detail books-data"
                        >
                          <input
                            disabled={value === 0 ? activeOrg : !activeOrg}
                            type="checkbox"
                            checked={selectedOrganizations.some(
                              (selectedUser) =>
                                selectedUser.organization_id === organization.organization_id
                            )}
                            onChange={() =>
                              (value === 0 ? !activeOrg : activeOrg) &&
                              handleOrganizationSelect(organization)
                            }
                          />
                        </div>
                        <div className="Img-text">
                          <div className="book-detail">
                            <img
                              style={{
                                height: "41px",
                                width: "41px",
                                borderRadius: "41px",
                              }}
                              src={organization?.branding?.logo_url}
                              alt="org logo"
                            />

                            <div>
                              <h5>
                                {organization?.name.length >= 10
                                  ? organization?.name.substring(0, 10) + "..."
                                  : organization?.name}
                              </h5>
                              <h6 className="org-name">
                                {organization?.display_name}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                );
              })
            ) : (
              <p>Search org Here!</p>
            )}

            <div>
              <Pagination size="sm">{items}</Pagination>
            </div>
          </div>

          {selectedOrganizations.length > 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <h2>
                {value === 0 ? "Will shared with:" : "Will remove access:"}
              </h2>
              <ol>
                {selectedOrganizations.map((organization, index) => (
                  <li key={organization?.organization_id}>
                    {organization.organizationname ||
                      organization.name ||
                      organization.email}
                  </li>
                ))}
              </ol>
              <Button onClick={handleAssignSelectedOrganizations}>
                Assign All Selected
              </Button>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
