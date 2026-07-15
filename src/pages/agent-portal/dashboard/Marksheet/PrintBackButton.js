import React from "react";

// A small, print-hidden "Back" control for the standalone Marksheet/TC pages.
// These pages are reached via history.push (not changeView) because their
// A4.css print layout needs the page to itself -- rendering them inside the
// Dashboard shell breaks the A4 sizing. history.goBack() works correctly
// here since history.push always adds a real browser-history entry for
// these routes.
function PrintBackButton(props) {
  return (
    <div className="no-print" style={{
      position: "fixed",
      top: "10px",
      left: "10px",
      zIndex: 100000,
    }}>
      <style>{`@media print { .no-print { display: none !important; } }`}</style>
      <button
        onClick={() => props.history.goBack()}
        style={{
          padding: "8px 16px",
          fontSize: "14px",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#3f51b5",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        &larr; Back
      </button>
    </div>
  );
}

export default PrintBackButton;
