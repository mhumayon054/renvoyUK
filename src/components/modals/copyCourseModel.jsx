import React, { useEffect, useState } from "react";
import { Button, Modal, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
import { ApiRequests } from "../../service/ApiRequests";
import {
  assignCollectionToOrgAsyncThunk,
  copyCourseForOrgAsyncThunk,
  unassignCollectionToOrgAsyncThunk,
} from "../../redux/pagesSlices/collectionSlice";
import Pagination from "react-bootstrap/Pagination";
import { Box, Tab, Tabs } from "@mui/material";

export default function CopyCourseModel() {
  const state = useSelector(
    (state) => state.model?.modelState?.CopyCourseModel
  );
  const modelArgs = useSelector(
    (state) => state.model?.modelArgs?.CopyCourseModel?.args
  );
  const d = useDispatch();
  const [searchValue, setSearchValue] = useState(null);
  const [organizations, setOrganizations] = useState({
    limit: 10,
    results:[],
    // organizations: [],
    start: 0,
    page: 0,
    total: 16,
  });
  console.log(
    "🚀 ~ file: CopyCourseModel.jsx:30 ~ organizations:",
    organizations
  );
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
      name: searchValue, // Include search parameter
      ...params,
    });
    setOrganizations(response?.data);
    return response?.data;
  };

  useEffect(() => {
    if (state) {
      getOrganizations({ page: 0 });
    }
  }, [searchValue, state]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // close model
  // const closeModel = () =>
  //   d(handleModel({ model: "AssignModel", state: false }));

  const closeModel = () => {
    d(handleModel({ model: "CopyCourseModel", state: false }));
    setSelectedOrganizations([]);
  };

  const [selectedOrganizations, setSelectedOrganizations] = useState([]);

  // ... (other code)

  // Function to handle organization selection
  const handleOrganizationSelect = (organization) => {
    setSelectedOrganizations([organization]);
    return;
    setSelectedOrganizations((prevSelectedOrganizations) => {
      const isSelected = prevSelectedOrganizations.some(
        (selectedOrganization) => selectedOrganization.id === organization.id
      );
      if (isSelected) {
        // If organization is already selected, remove from selected organizations
        return prevSelectedOrganizations.filter(
          (selectedOrganization) => selectedOrganization.id !== organization.id
        );
      } else {
        // If organization is not selected, add to selected organizations
        return [...prevSelectedOrganizations, organization];
      }
    });
  };

  // Function to handle the "assign" action for selected organizations
  const handleAssignSelectedOrganizations = () => {
    const orgIds =
      selectedOrganizations &&
      selectedOrganizations?.map((organization) => organization?.id);
    d(
      copyCourseForOrgAsyncThunk({
        data: { orgId: orgIds[0], collection_id: modelArgs?.id },
        callBack: () => {},
      })
    );

    setSelectedOrganizations([]);
  };
  // let active = Math.ceil(
  //   (organizations?.organizations?.length + organizations?.start) /
  //     organizations?.limit
  // );
  let active = organizations?.page;

  let items = [];
  for (
    let number = 1;
    // number <= Math.ceil(organizations?.total / organizations?.limit);
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
  useEffect(() => {
    setSelectedOrganizations([]);
  }, []);

  return (
    <Modal
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={state}
      onHide={closeModel}
    >
      <Modal.Body className="invite-model">
        <div className="confirmation-popup">
          <h3 style={{ marginBottom: "15px", fontWeight: "600" }}>
            Copy to organization(s)
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
                  (item) => item.space_id === organization.id
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
                          !activeOrg && handleOrganizationSelect(organization)
                        }
                      >
                        <div
                          style={{ marginRight: "30px" }}
                          className="book-detail books-data"
                        >
                          <input
                            disabled={activeOrg}
                            type="checkbox"
                            checked={selectedOrganizations.some(
                              (selectedUser) =>
                                selectedUser.id === organization.id
                            )}
                            onChange={() =>
                              !activeOrg &&
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
                marginTop: "25px",
              }}
            >
              <h2>Will copy for:</h2>
              <ol>
                {selectedOrganizations.map((organization, index) => (
                  <li key={organization.id}>
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
