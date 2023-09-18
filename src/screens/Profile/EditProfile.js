import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import Text from "../../components/Text";
import { baseStyle } from "../../assets/styles/base";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  EnvelopeIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";

const EditProfile = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [radioVal, setRadioVal] = useState("");
  const [qualification, setQualification] = useState("");

  const RadioIcon = ({ filled }) => (
    <View
      style={{
        borderRadius: 400,
        borderWidth: 2,
        borderColor: baseStyle.black,
        height: 20,
        width: 20,
        backgroundColor: filled && baseStyle.black,
      }}
    ></View>
  );

  return (
    <ScrollView style={baseStyle.page}>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <ImageBackground
          source={{
            uri: booking.prof.profileImage,
          }}
          imageStyle={{ borderRadius: 400 }}
          resizeMode="cover"
          style={{ width: 120, height: 120, marginBottom: 20 }}
        ></ImageBackground>
      </View>

      <View>
        <View style={baseStyle.inputWrapper}>
          <Text weight="medium" type="paragraph3" style={{ marginBottom: 7 }}>
            First Name
          </Text>
          <Input
            icon={<UserIcon color={baseStyle.gray500} size={20} />}
            hasLeftIcon
            placeholder="Enter first name"
            onChangeText={setFirstName}
            value={firstName}
          />
        </View>

        <View style={baseStyle.inputWrapper}>
          <Text weight="medium" type="paragraph3" style={{ marginBottom: 7 }}>
            Last Name
          </Text>
          <Input
            icon={<UserIcon color={baseStyle.gray500} size={20} />}
            hasLeftIcon
            placeholder="Enter first name"
            onChangeText={setLastName}
            value={lastName}
          />
        </View>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 7 }}>
          Gender
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable onPress={() => setRadioVal("Male")}>
            <View style={{ flexDirection: "row" }}>
              <RadioIcon filled={radioVal === "Male"} />
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                Male
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => setRadioVal("Female")}>
            <View style={{ flexDirection: "row" }}>
              <RadioIcon filled={radioVal === "Female"} />
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                Female
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => setRadioVal("Rather not say")}>
            <View style={{ flexDirection: "row" }}>
              <RadioIcon filled={radioVal === "Rather not say"} />
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                Rather Not Say
              </Text>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={baseStyle.inputWrapper}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 7 }}>
          Email
        </Text>
        <Input
          icon={<EnvelopeIcon color={baseStyle.gray500} size={20} />}
          hasLeftIcon
          placeholder="Enter first name"
          value={"email"}
          disabled
        />
      </View>

      <View style={baseStyle.inputWrapper}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 7 }}>
          Qualification
        </Text>
        <Input
          icon={<AcademicCapIcon color={baseStyle.gray500} size={20} />}
          hasLeftIcon
          placeholder="Enter first name"
          onChangeText={setQualification}
          value={qualification}
        />
      </View>

      <View style={baseStyle.inputWrapper}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 7 }}>
          Qualification
        </Text>
        <Input
          icon={<CheckBadgeIcon color={baseStyle.gray500} size={20} />}
          hasLeftIcon
          placeholder="Enter first name"
          onChangeText={setQualification}
          value={qualification}
        />
      </View>

      <View style={baseStyle.inputWrapper}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 7 }}>
          Years of Experience
        </Text>
        <Input
          icon={<CheckBadgeIcon color={baseStyle.gray500} size={20} />}
          hasLeftIcon
          placeholder="Years of Experience"
          onChangeText={setQualification}
          value={qualification}
          keyboardType="number-pad"
        />
      </View>

      <View style={baseStyle.inputWrapper}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 7 }}>
          License Number
        </Text>
        <Input
          icon={<CheckBadgeIcon color={baseStyle.gray500} size={20} />}
          hasLeftIcon
          placeholder="License Number"
          onChangeText={setQualification}
          value={qualification}
        />
      </View>

      <View style={baseStyle.inputWrapper}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 7 }}>
          Address
        </Text>
        <Input
          icon={<CheckBadgeIcon color={baseStyle.gray500} size={20} />}
          hasLeftIcon
          placeholder="Address"
          onChangeText={setQualification}
          value={qualification}
        />
      </View>

      <View style={baseStyle.inputWrapper}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 7 }}>
          Postcode
        </Text>
        <Input
          icon={<CheckBadgeIcon color={baseStyle.gray500} size={20} />}
          hasLeftIcon
          placeholder="Postcode"
          onChangeText={setQualification}
          value={qualification}
        />
      </View>

      <View style={baseStyle.inputWrapper}>
        <Text weight="medium" type="paragraph3" style={{ marginBottom: 7 }}>
          Postcode
        </Text>

        <Input
          style={{
            height: 200,
            padding: 20,
            borderColor: baseStyle.gray300,
            borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          placeholder="Write text here..."
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          value={""}
        />
      </View>

      <Button text="Update Profile" />
    </ScrollView>
  );
};

export default EditProfile;
