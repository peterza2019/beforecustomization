import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Select,
	InputGroup,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import useShowToast from "../hooks/useShowToast";
import userAtom from "../atoms/userAtom";

export default function SignupCard() {
	const [showPassword, setShowPassword] = useState(false);
	const setAuthScreen = useSetRecoilState(authScreenAtom);
	const [inputs, setInputs] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
	});

	const showToast = useShowToast();
	const setUser = useSetRecoilState(userAtom);

	const handleSignup = async () => {
		try {
			const res = await fetch("/api/users/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs),
			});
			const data = await res.json();

			if (data.error) {
				showToast("Error", data.error, "error");
				return;
			}

			localStorage.setItem("user-threads", JSON.stringify(data));
			setUser(data);
		} catch (error) {
			showToast("Error", error, "error");
		}
	};

	return (
		<Flex align={"center"} justify={"center"}>
			
			
			
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>

			

				<Stack align={"center"}>

				<Heading fontSize={"2xl"} textAlign={"center"}>
						Join Petstagram
					</Heading>

					

				</Stack>

				

				<Box rounded={"lg"} 
				     bg={useColorModeValue("white", "gray.dark")} 
					 boxShadow={"lg"} 

					 bg={"rgba=(255, 255, 255, 0.8)"}
					 backdropFilter={"blur(10px)"}
					 borderRadius={"10px"}
					 boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.7)"}
					 padding={"20px"}
			   
					 p={8}>

                   

					<Stack spacing={5}> <Stack>
							<Box> 


								<FormControl isRequired>
									<FormLabel>Your Pets Name</FormLabel>
									<Input
										type='text'
										onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
										value={inputs.username}
									/>
								</FormControl>
								
							</Box>
												
							


						</Stack>

						<FormControl isRequired>
  

  <FormLabel>Cat .. Dog .. or .. Other ?</FormLabel>

  <Select placeholder='    '>
    <option>Cat </option>
    <option>Dog </option>
    <option>Other  ;)</option>
  </Select>

</FormControl>


						<FormControl isRequired>
									<FormLabel>Your Full Name</FormLabel>
									<Input
										type='text'
										onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
										value={inputs.name}
									/>
								</FormControl>
								



						<FormControl isRequired>
							<FormLabel>Verified Email Address</FormLabel>
							<Input
								type='email'
								onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
								value={inputs.email}
							/>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Secure Password</FormLabel>
							<InputGroup>
								<Input
									type={showPassword ? "text" : "password"}
									onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
									value={inputs.password}
								/>
								<InputRightElement h={"full"}>
									<Button
										variant={"ghost"}
										onClick={() => setShowPassword((showPassword) => !showPassword)}
									>
										{showPassword ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>


						</FormControl>
						<Stack spacing={10} pt={2}>
							<Button
								loadingText='Submitting'
								size='lg'
								bg={useColorModeValue("gray.600", "gray.700")}
								color={"white"}
								_hover={{
									bg: useColorModeValue("gray.700", "gray.800"),
								}}
								onClick={handleSignup}
							>
								Sign up
							</Button>
						</Stack>

						<Stack pt={6}>
							<Text align={"center"}>
								Already a Member ?{" "}
								<Link color={"blue.400"} onClick={() => setAuthScreen("login")}>
									Login
								</Link>
							</Text>
						</Stack>

					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
