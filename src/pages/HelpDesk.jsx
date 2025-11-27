import React, { useState } from 'react';
import { Plus, Upload } from 'lucide-react';
import './HelpDesk.css';

const HelpDesk = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [message, setMessage] = useState('');

  const departments = [
    'Academic Services',
    'IT Support',
    'Library Services',
    'Administration',
    'Finance',
    'Examination',
  ];

  const topics = [
    'Course Registration',
    'Grade Inquiry',
    'Technical Issue',
    'Account Access',
    'General Query',
    'Complaint',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Request submitted successfully!');
    setShowCreateForm(false);
    setSelectedDepartment('');
    setSelectedTopic('');
    setMessage('');
  };

  return (
    <div className="helpdesk-page">
      <div className="breadcrumb">
        <a href="/">Home</a> / <span>Help Desk</span>
      </div>

      {!showCreateForm ? (
        <div className="helpdesk-content">
          <div className="helpdesk-header">
            <button 
              className="create-request-btn"
              onClick={() => setShowCreateForm(true)}
            >
              <Plus size={20} />
              Create new request
            </button>
          </div>

          <div className="tickets-table">
            <table>
              <thead>
                <tr>
                  <th>S.N.</th>
                  <th>Topic name</th>
                  <th>Latest reply</th>
                  <th>All replies</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="no-data">
                    <div className="no-tickets-message">
                      <div className="message-icon">🎫</div>
                      <p>No support tickets found. Create a new request to get started.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="create-request-content">
          <div className="breadcrumb-extended">
            <a href="/">Home</a> / <a href="/help-desk">Help Desk</a> / <span>Create new request</span>
          </div>

          <form className="request-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Select department <span className="required">*</span>
              </label>
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                required
              >
                <option value="">Select department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>
                Select topic <span className="required">*</span>
              </label>
              <select 
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                required
              >
                <option value="">Select topic</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>
                Enter your message <span className="required">*</span>
              </label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="8"
                placeholder="Describe your issue or query in detail..."
                required
              />
            </div>

            <div className="form-group">
              <label>Upload images</label>
              <p className="file-info">Maximum file size: 10MB, maximum number of files: 1</p>
              <div className="file-upload-area">
                <div className="upload-zone">
                  <Upload size={48} className="upload-icon" />
                  <p>Drag and drop files here or click to browse</p>
                  <input type="file" accept="image/*" />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => setShowCreateForm(false)}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default HelpDesk;
