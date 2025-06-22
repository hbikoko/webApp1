import React from 'react';

function CurrentProjectsPage() {
  return (
    <div style={{ paddingTop: '150px', padding: '0 20px' }}>
      <h1>Current Projects</h1>
      <section>
        <h2>Reading Program</h2>
        <p>
          Our Reading Program is designed to support early literacy and foster a love of reading in our community. Learn more about how we empower students and families through culturally responsive literacy initiatives.
        </p>
        <a href="/services/community" style={{ color: '#6a994e', textDecoration: 'underline' }}>
          &larr; Back to Community
        </a>
      </section>
      <div style={{ marginTop: '40px', padding: '20px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
        <h3>Grants</h3>
        <p>
          We gratefully acknowledge the support of our grant partners who make these projects possible.
        </p>
        {/* Add specific grant credits here as needed */}
      </div>
    </div>
  );
}

export default CurrentProjectsPage;
