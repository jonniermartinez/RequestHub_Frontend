import * as React from "react";
import { ImageCompo } from "@/components";
import "./style-pqrCompo.css";
import { client } from "@/supabase";
import { AlertCircle } from "lucide-react";
import { useForm, string } from "react-form-ease";
import { useState, useEffect } from "react";

interface Props {
  empresa: string;
}

// ALERT
import { Alert, AlertDescription } from "@/components/ui/alert";

const PQRCompo: React.FC<IProps> = ({ empresa }: Props) => {
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
      const { error, data } = await client
        .from("pqr_owner")
        .insert({
          name: formData.name,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
        })
        .select();
      // guardar el id en una variable y mandarlo en el inser pqr form
      console.log(data);

      if (error) throw error;
    } catch (error) {
      console.log(error.message);
    }
    try {
      // insertar en pqr form
      const { error } = await client
        .from("pqr_form")
        .insert({
          pqr_type: formData.pqrType,
          subject: formData.subject,
          message: formData.message,
        })
        .single();

      if (error) throw error;
      //   window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  //  SELECT A LA DB
  const [pqrTypes, setPqrTypes] = useState<string[]>([]);
  // const [formDat, setFormData] = useState({ pqrType: '' });

  useEffect(() => {
    const fetchPqrTypes = async () => {
      try {
        const { data, error } = await client
          .from("category")
          .select("category");

        if (error) {
          console.error(error);
        }
        if (data) {
          console.log("DATA:", data);
          // Extrae los nombres de los tipos de PQR de los datos y almacénalos en el estado
          const typeNames = data?.map((row: any) => row.category);
          setPqrTypes(typeNames);
          console.log("TYPENAMES: ", typeNames);
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

  // ----------------------------------

  return (
    <>
      <div className="pqr-success">
        {showAlert && (
          <Alert className="alert-sucess" variant="default">
            <AlertCircle className="h-0 w-4" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="icon-success h-5 w-14 oc se axw"
            >
              <path
                stroke-linecap="round"
                className="icon-color"
                stroke-linejoin="round"
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
          url="https://freecodecamp.org/news/content/images/size/w2000/2022/02/arrows-2889040_1920.jpg"
        />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm content-all-fields">
          <form noValidate onSubmit={handleSubmit}>
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

            <div className="flex gap-3 flex-wrap lg:flex-nowrap">
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

            <div>
              <select
                className="pqrType-item sm:text-sm field w-[385px] h-[36px]  border-gray-100 rounded-md ring-1 ring-inset ring-gray-300 content-fields"
                value={formData.pqrType}
                onChange={(e) => updateForm({ pqrType: e.target.value })}
              >
                <option className="pqrType-items" value="">
                  PQR Type
                </option>
                {pqrTypes.map((typeNames) => (
                  <option key={typeNames} value={typeNames}>
                    {typeNames}
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

            {/* <div className="content-fields">
                            <select className="pqrType-item sm:text-sm field w-[385px] h-[36px]  border-gray-100 rounded-md ring-1 ring-inset ring-gray-300 content-fields" value={formData.pqrType} onChange={(e) => updateForm({ pqrType: e.target.value })}>
                                <option className="pqrType-items" value="">PQR Type</option>
                                <option value="Opción 1">Opción 1</option>
                                <option value="Opción 2">Opción 2</option>
                                <option value="Opción 3">Opción 3</option>
                                <option value="Opción 4">Opción 4</option>
                            </select>
                            {errors?.pqrType && (<Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>
                                    Error in the PQR Type field.
                                </AlertDescription>
                            </Alert>)}
                        </div> */}

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
                className="btn-enviar "
              >
                Enviar PQR
              </button>
            </div>
          </form>
        </div>
        <div />
      </div>
    </>
  );
};

export default PQRCompo;
