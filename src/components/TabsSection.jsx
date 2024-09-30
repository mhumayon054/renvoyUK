import React, { useState } from "react";

const TabsSection = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <div className="custom-tabs-container container-fluid">
      {/* Tabs Header */}
      <div className="custom-tabs-header">
        <div
          className={`custom-tab-item ${activeTab === "Details" ? "custom-active-tab" : ""}`}
          onClick={() => setActiveTab("Details")}
        >
          Details
        </div>
        <div
          className={`custom-tab-item ${activeTab === "Documents" ? "custom-active-tab" : ""}`}
          onClick={() => setActiveTab("Documents")}
        >
          Documents
        </div>
        <div
          className={`custom-tab-item ${activeTab === "Trip Summary" ? "custom-active-tab" : ""}`}
          onClick={() => setActiveTab("Trip Summary")}
        >
          Trip Summary
        </div>
        <div
          className={`custom-tab-item ${activeTab === "Invoicing" ? "custom-active-tab" : ""}`}
          onClick={() => setActiveTab("Invoicing")}
        >
          Invoicing
        </div>
        <div
          className={`custom-tab-item ${activeTab === "Log" ? "custom-active-tab" : ""}`}
          onClick={() => setActiveTab("Log")}
        >
          Log
        </div>
      </div>

      {/* Content Section for each tab */}
      <div className="custom-tab-content">
        {activeTab === "Details" && (
          <div className="custom-tab-pane">
            <h2>Details Tab</h2>
            <p>This is the content for the Details tab. You can add more information about the specific details here.</p>
          </div>
        )}

        {activeTab === "Documents" && (
          <div className="custom-tab-pane">
            <h2>Documents Tab</h2>
            <p>This section displays documents related to the current item. You can upload, view, and manage documents here.</p>
          </div>
        )}

        {activeTab === "Trip Summary" && (
          <div className="custom-tab-pane">
            <h2>Trip Summary Tab</h2>
            <p>View the trip summary and important information related to the trip, including start and end points, timings, and more.</p>
          </div>
        )}

        {activeTab === "Invoicing" && (
          <div className="custom-tab-pane">
            <h2>Invoicing Tab</h2>
            <p>Handle invoicing for the selected trip here. This section includes invoice details, due dates, and payment statuses.</p>
          </div>
        )}

        {activeTab === "Log" && (
          <div className="custom-tab-pane">
            <h2>Log Tab</h2>
            <p>Keep track of all logs, changes, and updates. This can include status changes, user comments, and other relevant logs.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;
