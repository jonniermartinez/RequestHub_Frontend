import * as React from "react";
import "./style-pqrCompo.css";
import { client } from "@/supabase";
import { AlertCircle } from "lucide-react";
import { useForm, string } from "react-form-ease";
import { useState, useEffect } from "react";
import { ImageCompo } from "@/components";

interface Props {
  empresa: string;
  profileId: string | undefined
}

// ALERT
import { Alert, AlertDescription } from "@/components/ui/alert";

const PQRCompo = ({ empresa, profileId }: Props) => {
  empresa;


  // VALIDACIONES
  const { formData, updateForm, validateForm, errors } = useForm({
    data: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      pqrType: "",
      subject: "",
      message: "",
      sucess: false,
    },
    validations: {
      name: (value) => string(value).required().validate(),
      lastName: (value) => string(value).required().validate(),
      phone: (value) =>
        string(value).required().numeric().length(10).validate(),
      email: (value) => string(value).email().required().validate(),
      pqrType: (value) => string(value).required().validate(),
      subject: (value) => string(value).required().validate(),
      message: (value) => string(value).required().validate(),
    },
  });
  // Ingresar el formulario en la DB
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formData);

    // Si el formulario es inválido , "muestra el mensaje de error"; sino , crea el pqr
    if (!validateForm()) {
      return;
    } else {
      createPqr();
      formData.sucess = true;
      // alert('¡Datos guardados exitosamente!');
    }
  };

  // Insertar datos en la DB
  async function createPqr() {
    // insertar en la tabla pqrOwer
    // name: formData.name,
    // lastname: formData.lastName,
    // phone: formData.phone,
    // email: formData.email,
    // inserta en la tabla pqrForm
    try {
      // insertar en la tabla pqrOwer

      const { data: ownerData, error: ownerError } = await client
        .from("pqr_owner")
        .select("id")
        .eq("email", formData.email);

      if (ownerError) throw ownerError;

      let ownerId;

      if (ownerData.length > 0) {
        // Si el correo existe, obtener el ID
        ownerId = ownerData[0].id;
      } else {
        // Si el correo no existe, insertar en la tabla pqr_owner

        const { error, data } = await client
          .from("pqr_owner")
          .insert({
            name: formData.name,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
          })
          .select("id");
        // guardar el id en una variable y mandarlo en el inser pqr form
        // console.log(data);

        if (error) throw error;
        ownerId = data[0].id;
      }

      const { error: formError } = await client
        .from("pqr_form")
        .insert({
          subject: formData.subject,
          message: formData.message,
          pqr_type: formData.pqrType,
          id_profile: profileId,
          state: "open",
          pqr_owner: ownerId,
        })
        .single();

      // console.log(data);
      if (formError) throw formError;
      // window.location.reload();
      // console.log("FormData: ", formData);
    } catch (error) {
      console.error(error.message);
    }

  }

  // SELECT A LA DB
  const [pqrTypes, setPqrTypes] = useState<{ id: number; category: string }[]>([]);

  useEffect(() => {
    const fetchPqrTypes = async () => {
      try {
        const { data, error } = await client
          .from("category")
          .select("category, id");

        if (error) {
          console.error(error);
        }
        if (data) {
          //console.log("DATA:", data);
          // Store both category and id in the state
          setPqrTypes(data);
          // console.log("TYPENAMES: ", data);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    // trae los tipos de la db
    fetchPqrTypes();
  }, []);

  //MOSTRAR ALERT POR CIERTO TIEMPO
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // console.log('Sucess: ', formData.sucess);
    if (formData.sucess) {
      // Mostrar la alerta
      setShowAlert(true);

      // Ocultar la alerta después de 5 segundos
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5000); // 5 segundos en milisegundos

      // Limpia el temporizador cuando el componente se desmonta
      return () => clearTimeout(timeout);
    }
  }, [formData.sucess]);

  return (
    <>
      <div className="pqr-success">
        {showAlert && (
          <Alert className="alert-sucess" variant="default">
            <AlertCircle className="h-0 w-4" />
            <svg
              fill="none"
              viewBox="0 2 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-success h-5 w-14"
            >
              <path
                strokeLinecap="round"
                className="icon-color"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <AlertDescription>Successfully uploaded</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="row">
        <ImageCompo
          texto="RequestHub"
          url="https://img.freepik.com/premium-photo/software-programming-concept-mobile-app-developer-coding-language-development-purple-background-statistic-user-interface-system-minimal-cartoon-3d-render-illustration_598821-1150.jpg?w=740"
        />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm content-all-fields">
          <form noValidate onSubmit={handleSubmit} className="form-content">
            <div className="content-fields pqr">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-login">
                PQR
              </h2>
            </div>
            {/* <p className="mt-6 text-base leading-7 text-gray-500 small-text">
              Estas a punto de llenar una pqr para la empresa {empresa}
            </p> */}
            <div className="flex gap-3 flex-wrap lg:flex-nowrap">
              <div className="content-fields">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => updateForm({ name: e.target.value })}
                    value={formData.name}
                    placeholder="Name"
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5| focus:ring-inset sm:text-sm sm:leading-6 field"
                  />
                  {errors?.name && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Error in the Name field.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>

              <div className="content-fields">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Last Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => updateForm({ lastName: e.target.value })}
                    value={formData.lastName}
                    placeholder="Last Name"
                    id="LastName"
                    name="LastName"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset sm:text-sm sm:leading-6 field"
                  />
                  {errors?.lastName && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Error in the Lastname field.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>
            </div>

            <div className="secod-content flex gap-3 flex-wrap lg:flex-nowrap">
              <div className="content-fields">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Phone
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => updateForm({ phone: e.target.value })}
                    value={formData.phone}
                    placeholder="Phone"
                    id="Phone"
                    name="Phone"
                    type="tel"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset sm:text-sm sm:leading-6 field"
                  />
                  {errors?.phone && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Error in the Phone field.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>

              <div className="content-fields">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => updateForm({ email: e.target.value })}
                    value={formData.email}
                    placeholder="Email"
                    id="Email"
                    name="Email"
                    type="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset sm:text-sm sm:leading-6 field"
                  />
                  {errors?.email && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Error in the Email field.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>
            </div>

            <div className="pqr-opcion">
              <select
                className="pqrType-item sm:text-sm field w-[100%] h-[36px]  border-gray-100 rounded-md ring-1 ring-inset ring-gray-300 content-fields"
                value={formData.pqrType}
                onChange={(e) => updateForm({ pqrType: e.target.value })}
              >
                <option className="pqrType-items" value="">
                  PQR Type
                </option>
                {pqrTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.category}
                  </option>
                ))}
              </select>
              {errors?.pqrType && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Error in the PQR Type field.
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <div className="content-fields">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Subject
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => updateForm({ subject: e.target.value })}
                  value={formData.subject}
                  placeholder="Subject"
                  id="subject"
                  name="subjet"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset sm:text-sm sm:leading-6 field"
                />
                {errors?.subject && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Error in the Subject field.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>

            <div className="content-fields">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Your message
              </label>
              <div className="lb">
                <textarea
                  onChange={(e) => updateForm({ message: e.target.value })}
                  value={formData.message}
                  placeholder="Describe..."
                  name="comment"
                  id="comment"
                  rows={4}
                  className="sm:text-sm field w-full ring-1 ring-inset ring-gray-300"
                ></textarea>
                {errors?.message && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Error in the Message field.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
            <div className="content-fields">
              <button
                onClick={() => {
                  !validateForm();
                }}
                type="submit"
                id="btn-enviar"
                className="btn-enviar">Enviar PQR</button>
            </div>
          </form>
        </div>
        <div />
      </div>
    </>
  );
};

export default PQRCompo;
