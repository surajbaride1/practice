export const STRINGS = {
  alerts: {
    selectImageFile: 'Please select an image file',
    imageSaved: 'Image saved successfully!',
    imageDeleted: 'Image deleted successfully!',
    confirmDeleteImage: 'Are you sure you want to delete this image?',
  },
  header: {
    title: 'Personal Data Manager',
    nav: {
      profile: 'Profile',
      contact: 'Contact Info',
      education: 'Education',
      experience: 'Work Experience',
      skills: 'Skills',
      documents: 'Documents',
      images: 'Images',
    },
  },
  images: {
    title: 'Image Storage',
    nameLabel: 'Image Name (Optional)',
    uploadLabel: 'Upload Image',
    namePlaceholder: 'Enter a name for your image',
    emptyState: 'No images stored yet. Upload an image to get started!',
  },
  profile: {
    title: 'Personal Profile',
    saveButton: 'Save Profile',
    labels: {
      firstName: 'First Name',
      lastName: 'Last Name',
      dateOfBirth: 'Date of Birth',
      gender: 'Gender',
      nationality: 'Nationality',
      address: 'Address',
      bio: 'Bio',
    },
    placeholders: {
      bio: 'Tell us about yourself...',
    },
    options: {
      gender: {
        select: 'Select Gender',
        male: 'Male',
        female: 'Female',
        other: 'Other',
      },
    },
    alerts: {
      saved: 'Profile data saved successfully!',
    },
  },
  contact: {
    title: 'Contact Information',
    saveButton: 'Save Contact Info',
    labels: {
      email: 'Email',
      phone: 'Phone',
      mobile: 'Mobile',
      website: 'Website',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      twitter: 'Twitter',
      facebook: 'Facebook',
    },
    placeholders: {
      website: 'https://',
      linkedin: 'https://linkedin.com/in/...',
      github: 'https://github.com/...',
      twitter: 'https://twitter.com/...',
      facebook: 'https://facebook.com/...',
    },
    alerts: {
      saved: 'Contact information saved successfully!',
    },
  },
  education: {
    title: 'Education',
    addButton: 'Add Education',
    savedTitle: 'Saved Education',
    labels: {
      institution: 'Institution',
      degree: 'Degree',
      fieldOfStudy: 'Field of Study',
      startDate: 'Start Date',
      endDate: 'End Date',
      gpa: 'GPA / Grade',
      description: 'Description',
    },
    placeholders: {
      degree: "e.g., Bachelor's, Master's",
      field: 'e.g., Computer Science',
      gpa: 'e.g., 3.8/4.0',
      description: 'Additional details...',
    },
    alerts: {
      added: 'Education added successfully!',
    },
  },
  experience: {
    title: 'Work Experience',
    addButton: 'Add Experience',
    savedTitle: 'Saved Work Experience',
    labels: {
      company: 'Company',
      position: 'Position',
      startDate: 'Start Date',
      endDate: 'End Date',
      currentCheckbox: 'Currently working here',
      description: 'Description',
    },
    placeholders: {
      description: 'Describe your responsibilities and achievements...',
    },
    alerts: {
      added: 'Work experience added successfully!',
    },
    presentLabel: 'Present',
  },
  skills: {
    title: 'Skills',
    addButton: 'Add Skill',
    savedTitle: 'Your Skills',
    labels: {
      skillName: 'Skill Name',
      level: 'Level',
      category: 'Category',
    },
    placeholders: {
      skillName: 'e.g., JavaScript, Python',
    },
    levels: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      expert: 'Expert',
    },
    categories: {
      technical: 'Technical',
      soft: 'Soft Skills',
      language: 'Language',
      other: 'Other',
    },
  },
  documents: {
    title: 'Documents',
    addButton: 'Add Document',
    savedTitle: 'Saved Documents',
    labels: {
      name: 'Document Name',
      type: 'Document Type',
      number: 'Document Number',
      issueDate: 'Issue Date',
      expiryDate: 'Expiry Date',
      notes: 'Notes',
    },
    placeholders: {
      name: "e.g., Passport, Driver's License",
      notes: 'Additional information...',
    },
    typeOptions: {
      select: 'Select Type',
      id: 'ID Card',
      passport: 'Passport',
      license: 'License',
      certificate: 'Certificate',
      other: 'Other',
    },
    alerts: {
      saved: 'Document information saved successfully!',
    },
    summary: {
      type: 'Type',
      number: 'Number',
      issue: 'Issue',
      expiry: 'Expiry',
    },
  },
};


