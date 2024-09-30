import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().required("Email is Required").email("Enter Valid Email"),

  password: yup
    .string()
    .required("Password is Required")
    .min(8, "Password must be at least 8 characters"),
});

export const InviteSchema = yup.object().shape({
  organizationId: yup.string().required("organizationId is Required"),
  invitationType: yup.string().required("invitationType is Required"),
  roles: yup.array().required("roles is Required"),
  client_id: yup.string().required("client_id is Required"),
  email: yup.string().required("Email is Required").email("Enter Valid Email"),
  inviter: yup.string().required("inviter is Required"),
});

export const OwnerSchema = yup.object().shape({
  name: yup.string().required("name is Required"),
  username: yup.string().required("Username is Required"),

  email: yup.string().required("Email is Required").email("Enter Valid Email"),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .min(8, "Password must be at least 8 characters long"),

  connection: yup.string().required("connection is Required"),
  nickname: yup.string().required("nickname is Required"),
  given_name: yup.string().required("given_name is Required"),
  family_name: yup.string().required("family_name is Required"),
  roles: yup.array().required("roles is Required"),

  // picture: yup.string()
  //     .required("Thumbnail is Required"),
});

export const IndexSchema = yup.object().shape({
  name: yup.string().required("Title is Required"),

  image: yup.string().required("Thumbnail is Required"),
  collection_id: yup
    .string()
    .required("collection is Required")
    .matches(/^[0-9a-fA-F]{24}$/, "collection must be a valid mongo id"),
});

export const ResourceSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),

  asset: yup.string(),
  // .required("Pdf is Required"),

  link: yup.string(),
  // .required("link is Required"),

  subject: yup.string().required("Subject is Required"),

  grade: yup.string().required("Grade is Required"),

  section: yup.string().required("Section is Required"),

  lesson: yup.string().required("Lesson is Required"),
});

export const CreateCompoSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),

  imge: yup.string().required("Image is Required"),
});

export const sectionSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),

  image: yup.string().required("Image is Required"),
});

export const componentSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),

  image: yup.string().required("Image is Required"),
  type: yup.mixed().oneOf(["quiz", "tutorial"]),
});

export const CardImageChoice = yup.object().shape({
  text: yup.string().required("Name is Required"),

  image: yup.string().required("Image is Required"),
});

export const UserExportSchema = yup.object().shape({
  connection: yup.string().required("Connection is Required"),
  fields: yup.array().required("Field is Required"),
});




// import
const allowedFileExtensions = ["csv", "xls", "xlsx"];
const maxFileSize = 10485760; // 10 MB (in bytes)
export const UserImportSchema = yup.object().shape({
  usersImportFile: yup.mixed()
    .required("Please select a file to import")
    .test(
      "fileFormat",
      "Invalid file format. Only CSV, XLS, and XLSX files are allowed.",
      (value) => {
        if (!value) return true;

        const fileExtension = value.name.split(".").pop().toLowerCase();
        return allowedFileExtensions.includes(fileExtension);
      }
    )
    .test(
      "fileSize",
      `File size must be less than ${maxFileSize / 1048576} MB`,
      (value) => {
        if (!value) return true;
        return value.size <= maxFileSize;
      }
    ),
});
// export const UserImportSchema = yup.object().shape({
//   usersImportFile: yup.mixed().required('File is required').test(
//     'fileFormat',
//     'Invalid file format',
//     (value) => {
//       if (!value) {
//         return false;
//       }
//       const supportedFormats = ['application/csv', 'text/csv'];
//       return supportedFormats.includes(value.type);
//     }
//   ),
// });

// Utility function to generate the common fields schema

// const generateCommonFieldsSchema = (storeValues) =>
//   yup.object().shape({
//     name: yup.string().required('Name is required'),
//     email: yup.string().email('Invalid email').required('Email is required'),
//     password: yup
//       .string()
//       .required('Password is required')
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/,
//         'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
//       )
//       .min(8, 'Password must be at least 8 characters long'),

//     // isUpdate: yup.boolean().required(),
//     // password: yup.string().when('isUpdate', {
//     //   is: true,
//     //   then: yup.string().required('Password is required'),
//     //   otherwise: yup.string(),
//     // }),

//     nickname: yup.string().required("Nickname is required"),
//     given_name: yup.string().required("Given name is required"),
//     family_name: yup.string().required("Family name is required"),
//     username: yup
//       .string()
//       .matches(/^\S*$/, 'No spaces allowed in username')
//       .required('Username is required'),
//   });

// // Owner schema
// export const OwnerFormSchemaIn1 = yup.object().shape({
//   ...generateCommonFieldsSchema().fields,

// });

// // Contact schema
// export const ContactFormSchemaIn = yup.object().shape({
//   ...generateCommonFieldsSchema().fields,
//   user_metadata: yup.object().shape({
//     phone: yup
//       .string()
//       // .matches(/^\d{3}-\d{3}-\d{4}$/, 'Phone number must be in the format XXX-XXX-XXXX')
//       .required("Phone number is Required"),
//   }),

//   connection: yup.string().required('Connection is required'),

// });

// export const UserFormSchemaIn = yup.object().shape({
//   ...generateCommonFieldsSchema().fields,
//   // connection: yup.string().required('Connection is required'),
//   user_metadata: yup.object().shape({
//     date: yup.string().required('Date of birth is required'),
//     grade: yup.string().required('Grade is required'),
//   }),
// });
